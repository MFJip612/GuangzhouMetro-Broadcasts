// common/onedrive.js
const ONEDRIVE_CONFIG = {
	clientId: '52495d2f-f27b-4eb4-aa56-269e6fe398de', // 替换为你的客户端ID
	redirectUri: 'http://localhost:8080/callback.html', // 本地调试重定向页
	scope: 'Files.Read.All',
	folderPath: 'broadcast' // 你的目标文件夹
};

class OneDriveService {
	constructor() {
		this.accessToken = null;
	}

	// 初始化并自动尝试静默登录
	async init() {
		try {
			this.accessToken = await this._getTokenSilently();
			return true;
		} catch (error) {
			return this._login();
		}
	}

	// 隐式流登录
	_login() {
		return new Promise((resolve, reject) => {
			const authUrl = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?
          client_id=${ONEDRIVE_CONFIG.clientId}
          &response_type=token
          &redirect_uri=${encodeURIComponent(ONEDRIVE_CONFIG.redirectUri)}
          &scope=${encodeURIComponent(ONEDRIVE_CONFIG.scope)}
          &state=broadcast`;

			// 记录弹出窗口引用
			let loginWindow = null;

			// 监听消息事件
			const messageHandler = (event) => {
				if (event.origin !== new URL(ONEDRIVE_CONFIG.redirectUri).origin) {
					return; // 忽略非目标来源的消息
				}
				const hash = event.data;
				const params = new URLSearchParams(hash);
				const token = params.get('access_token');
				if (token) {
					this.accessToken = token;
					resolve(token);
				} else {
					reject('No token found');
				}
				// 安全关闭窗口
				if (loginWindow && !loginWindow.closed) {
					loginWindow.close();
				}
				window.removeEventListener('message', messageHandler);
			};

			window.addEventListener('message', messageHandler);

			// 由用户触发打开窗口
			loginWindow = window.open(authUrl, 'OneDriveLogin', 'width=500,height=600');

			// 处理浏览器拦截
			if (!loginWindow) {
				reject('请允许弹出窗口以继续登录');
				window.removeEventListener('message', messageHandler);
			}
		});
	}

	// 获取broadcast文件夹文件列表
	async getFileList() {
		try {
			const response = await uni.request({
				url: `https://graph.microsoft.com/v1.0/me/drive/root:/${ONEDRIVE_CONFIG.folderPath}:/children`,
				header: {
					Authorization: `Bearer ${this.accessToken}`
				}
			});
			return response.data.value
				.filter(item => !item.folder)
				.map(file => ({
					name: file.name,
					url: file['@microsoft.graph.downloadUrl'],
					lastModified: file.lastModifiedDateTime
				}));
		} catch (error) {
			console.error('获取文件列表失败:', error);
			throw error;
		}
	}
}

export default new OneDriveService();