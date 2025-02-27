<template>
	<view>
		<view id="fileTree">
			<ul v-if="localContents.length">
				<li v-for="item in localContents" :key="item.id">
					<template v-if="item.folder">
						<text>📁 {{ item.name }}</text>
						<view class="sub-folder">
							<FileTree :contents="item.children" />
						</view>
					</template>
					<template v-else>
						<text v-show="isViewName">
							<uni-link class="file-link" :href="item['@microsoft.graph.downloadUrl']"
								target="_blank">📄{{ item.name }}</uni-link>
						</text>
						<audio v-show="!isViewName" :src="item['@microsoft.graph.downloadUrl']" :name="item.name"
							controls></audio>
					</template>
				</li>
			</ul>
			<view v-else><text>加载中...</text></view>
		</view>
	</view>
</template>
<script>
export default {
	name: 'FileTree',
	props: {
		contents: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			accessToken: null,
			localContents: [], // 使用 localContents 而不是直接修改 props
			isViewName: true
		};
	},
	async mounted() {
		await this.init();
	},
	watch: {
		// 监听 props.contents 的变化，更新 localContents
		contents: {
			immediate: true,
			handler(newVal) {
				this.localContents = newVal;
			}
		}
	},
	methods: {
		change() {
			this.isViewName = !this.isViewName;
		},
		async getAccessToken() {
			try {
				const response = await fetch('https://api.broadcast.mfjip.site/getAccessToken', {
					method: 'POST',
				});
				const data = await response.json();
				return data.access_token;
			} catch (error) {
				console.error('获取访问令牌失败:', error);
				return null;
			}
		},
		async getFolderContents(folderPath) {
			const url =
				`https://graph.microsoft.com/v1.0/users/0234abe4-65d4-4827-9625-bd8f7e26df03/drive/root:/${folderPath}:/children`;
			let contents = [];
			try {
				let nextLink = url;
				while (nextLink) {
					const response = await fetch(nextLink, {
						headers: {
							'Authorization': `Bearer ${this.accessToken}`
						},
					});
					const data = await response.json();
					for (const item of data.value) {
						if (item.folder) {
							item.children = await this.getFolderContents(`${folderPath}/${item.name}`);
						}
						contents.push(item);
					}
					nextLink = data['@odata.nextLink'];
				}
			} catch (error) {
				console.error('获取目录内容失败:', error);
			}
			return contents;
		},
		async init() {
			// 如果 props.contents 为空，则初始化数据
			if (this.contents.length === 0) {
				this.accessToken = await this.getAccessToken();
				if (this.accessToken) {
					this.localContents = await this.getFolderContents('broadcast');
				} else {
					console.error('无法获取访问令牌');
				}
			} else {
				// 如果 props.contents 不为空，则直接使用 props.contents
				this.localContents = this.contents;
			}
		}
	}
};
</script>
<style lang="scss" scoped>
.file-link {
	color: blue;
	text-decoration: underline;
	cursor: pointer;
}

ul {
	list-style-type: none;
	// margin-left: 20px;
}

li {
	margin: 5px 0;
}

.sub-folder {
	// margin-left: 20px;
}
</style>