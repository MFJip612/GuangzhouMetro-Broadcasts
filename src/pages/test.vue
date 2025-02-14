<template>
	<view class="container">
		<!-- <button @click="loadFiles">加载广播文件</button>
		 <!-- 页面中的按钮 -->
		<button @click="handleLogin">登录并加载文件</button>-->
		<view v-if="loading" class="loading">加载中...</view>
		<view v-else>
			<view v-for="file in files" :key="file.name" class="file-item">
				<text>{{ file.name }}</text>
				<a :href="file.url" target="_blank" class="download-btn">下载</a>
			</view>
		</view>
	</view>
</template>

<script>
	import oneDrive from '@/compoments/onedrive.js';

	export default {
		data() {
			return {
				files: [],
				loading: false
			};
		},
		async mounted() {
			await oneDrive.init();
		},
		methods: {
			async handleLogin() {
				await oneDrive.init();
				this.loadFiles();
			},
			async loadFiles() {
				this.loading = true;
				try {
					this.files = await oneDrive.getFileList();
				} catch (error) {
					uni.showToast({
						title: '加载失败，请重试',
						icon: 'none'
					});
				}
				this.loading = false;
			}
		}
	};
</script>