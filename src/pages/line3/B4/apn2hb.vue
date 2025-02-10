<template>
	<view>
		<uni-group v-for="item in stationRes" :key="item.title" :title="item.title + '    ' + item.subtitle" top="20"
			mode="card" class="station">
			<view>{{ item.title }} 站</view>
			<view>{{ item.subtitle }} Station</view>
			<view class="btnGroup">
				<button @click="PlaySound(item.src)">报站</button>
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
				stationRes: [] // 初始化 stationRes 为一个空数组
			};
		},
		onUnload() {
			this.innerAudioContext.pause();
			this.innerAudioContext.destroy();
		},
		onLoad() {
			// 初始化 innerAudioContext
			this.innerAudioContext = uni.createInnerAudioContext();
			// 获取站点资源
			this.getStationRes();
		},
		methods: {
			async getStationRes() {
				try {
					const response = await fetch(
						"https://broadcast-1304995454.cos.ap-guangzhou.myqcloud.com/res2.json");
					if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

					const data = await response.json();
					const keywords = ["AirportNToHaibang", "HaibangStart"];
					this.stationRes = data.stationRes.filter(station =>
						keywords.some(keyword => station.destination.includes(keyword))
					);
				} catch (error) {
					console.error('Error fetching station resources:', error);
				}
			},
			PlaySound(src) {
				if (this.innerAudioContext) {
					this.innerAudioContext.pause();
					this.innerAudioContext.src = src;
					this.innerAudioContext.play();
				}
			},
			stopPlay() {
				if (this.innerAudioContext) {
					this.innerAudioContext.pause();
				}
			}
		}
	}
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