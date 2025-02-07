<template>
	<view>
		<uni-group v-for="item in stationRes" :key="item.title" :title="item.title + '    ' + item.subtitle" top="20"
			mode="card" class="station">
			<view>{{ item.title }} 站</view>
			<view>{{ item.subtitle }} Station</view>
			<view class="btnGroup">
				<button @click="PlaySound(item)">报站</button>
				<button class="stop-play" @click="stopPlay()">停止播放</button>
			</view>
		</uni-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isPhone: false,
				innerAudioContext: null,
				stationRes: [], // 初始化stationRes为一个空数组
				audioQueue: [] // 音频播放队列
			};
		},
		onUnload() {
			this.innerAudioContext.pause();
			this.innerAudioContext.destroy();
		},
		onLoad() {
			// 初始化 innerAudioContext
			this.innerAudioContext = uni.createInnerAudioContext();
			this.innerAudioContext.onEnded(() => {
				this.playNextAudio();
			});
			this.innerAudioContext.onError((res) => {
				console.log(res.errCode);
				console.log(res.errMsg);
				this.playNextAudio();
			});

			// 获取站点资源
			this.getStationRes();
		},
		methods: {
			async getStationRes() {
				try {
					const response = await fetch(
						"https://broadcast-1304995454.cos.ap-guangzhou.myqcloud.com/resource.json"
					);
					if (!response.ok) {
						throw new Error(`HTTP error! Status: ${response.status}`);
					}
					const data = await response.json();
					const {
						stationRes
					} = data;
					const keywords = ["GuangzhouSouthRailwayStation", "JiahewanggangStart"];
					this.stationRes = stationRes.filter(station =>
						keywords.some(keyword => station.destination.includes(keyword))
					);
				} catch (error) {
					console.error("Failed to fetch or filter station resources:", error);
				}
			},
			PlaySound(item) {
				// 清空当前播放队列
				this.audioQueue = [];
				// 去除item.subtitle中的空格
				const subtitleWithoutSpaces = item.subtitle.replace(/\s+/g, "");
				// 固定顺序的基础音频文件
				const baseAudio = [
					"_destination_chs.mp3",
					"_d_GuangzhouSouthRailwayStation_chs.mp3",
					"_destination_jyut.mp3",
					"_d_GuangzhouSouthRailwayStation_jyut.mp3",
					"_destination_eng.mp3",
					"_d_GuangzhouSouthRailwayStation_eng.mp3",
					// 特定情况下插入的音频文件
					"_transfer.mp3",
					"_next_chs.mp3",
					`${subtitleWithoutSpaces}_chs.mp3`,
					"_next_jyut.mp3",
					`${subtitleWithoutSpaces}_jyut.mp3`,
					"_next_eng.mp3",
					`${subtitleWithoutSpaces}_eng.mp3`,
					"_goingto.mp3"
				];
				// 根据item.isTransfer的值决定是否插入_transfer.mp3
				const insertTransfer = item.isTransfer;
				// 构建最终的播放队列
				this.audioQueue = baseAudio.filter(audio => {
					if (audio === "_transfer.mp3") {
						return insertTransfer;
					}
					return true;
				});
				this.playNextAudio();
			},
			playNextAudio() {
				if (this.audioQueue.length === 0) return;
				const nextAudio = this.audioQueue.shift();
				const audioUrl = `https://vip.123pan.cn/1812581465/broadcast/2/${nextAudio}`;
				// 检查音频文件是否存在
				fetch(audioUrl, {
						method: 'HEAD'
					})
					.then(response => {
						if (response.ok) {
							this.innerAudioContext.src = audioUrl;
							this.innerAudioContext.play();
						} else {
							console.warn(`音频文件不存在: ${audioUrl}`);
							this.playNextAudio(); // 跳过当前音频，播放下一个
						}
					})
					.catch(error => {
						console.error(`检查音频文件时出错: ${audioUrl}`, error);
						this.playNextAudio(); // 跳过当前音频，播放下一个
					});
			},
			stopPlay() {
				this.innerAudioContext.pause();
				this.innerAudioContext.destroy();
			}
		}
	};
</script>
<style>
	.stations {
		color: #fff;
		background-color: #00629b;
	}

	/* 一般认为宽度大于等于768px的设备为平板 */
	@media screen and (min-width: 768px) {

		/* 平板样式 */
	}

	/* 一般认为宽度小于768px的设备为手机 */
	@media screen and (max-width: 767px) {
		/* 手机样式 */
	}

	.btnGroup {
		display: flex;
		justify-content: center;
	}

	button {
		width: 200rpx;
		display: flex;
		justify-content: center;
	}


	.btn-d {
		display: flex;
	}

	.station {
		width: auto;
	}
</style>