module.exports = {
	transpileDependencies: ['@dcloudio/uni-ui'],
	devServer: {
		proxy: {
			'/callback.html': {
				target: 'http://localhost:8080', // 本地调试地址
				changeOrigin: true,
				secure: false
			}
		}
	}
}