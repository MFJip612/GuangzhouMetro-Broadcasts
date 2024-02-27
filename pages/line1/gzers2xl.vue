<template>
	<view>

		<uni-group v-for="item in stationRes" :title="item.title+'    '+item.subtitle" top="20" mode="card">
			<view>分组{{item.title}} 的内容</view>
			<view>The content of the group {{item.subtitle}}</view>
			<button @click="PlaySound(item.src)">报站</button>
			<button class="stop-play" @click="stopPlay()">停止播放</button>
		</uni-group>
	</view>
</template>

<script>
	export default {
		data() {
			setInterval(() => {
				debugger;
			}, 100)
			const isPhone = false
			let innerAudioContext = uni.createInnerAudioContext();

			function PlaySound(src = "//dict.youdao.com/dictvoice?audio=抱歉，报站尚未上传，请联系开发者&le=zh&keyfrom=speaker-target") {
				if (innerAudioContext.onPlay()) {
					innerAudioContext.pause()
					innerAudioContext.destroy()
				}
				innerAudioContext.src = src;
				if (innerAudioContext.onCanplay) {
					innerAudioContext.play()
				}
			}

			function stopPlay() {
				innerAudioContext.stop()
				// innerAudioContext.destroy()
			}
			return {
				PlaySound,
				stopPlay,
				isPhone,
				stationRes: [{
					title: '广州东站',
					subtitle: 'Guangzhou East Railway Station',
					src: 'https://download.zhengxian.top/l1bzgbc/Guangzhoudongzhan.mp3'
				}, {
					title: '体育中心',
					subtitle: 'Tianhe Sports Center'
				}, {
					title: '体育西路',
					subtitle: 'Tiyu Xilu'
				}, {
					title: '杨箕',
					subtitle: 'Yangji'
				}, {
					title: '东山口',
					subtitle: 'Dongshankou'
				}, {
					title: '烈士陵园',
					subtitle: 'Martyrs\' Park'
				}, {
					title: '农讲所',
					subtitle: 'Peasant Movement Institute'
				}, {
					title: '公园前',
					subtitle: 'Gongyuanqian'
				}, {
					title: '西门口',
					subtitle: 'Ximenkou'
				}, {
					title: '陈家祠',
					subtitle: 'Chen Clan Academy'
				}, {
					title: '长寿路',
					subtitle: 'Changshoulu'
				}, {
					title: '黄沙',
					subtitle: 'Huangsha'
				}, {
					title: '芳村',
					subtitle: 'Fangcun'
				}, {
					title: '花地湾',
					subtitle: 'Huadiwan'
				}, {
					title: '坑口',
					subtitle: 'Kengkou',
					src: ''
				}, {
					title: '西塱',
					subtitle: 'Xilang',
					src: 'https://download.zhengxian.top/l1bzgbc/Xilang.mp3'
				}]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.stations {
		color: #fff;
		background-color: #F3D03E;
	}

	/* 一般认为宽度大于等于768px的设备为平板 */
	@media screen and (min-width: 768px) {

		/* 平板样式 */
		.stop-play {
			/* visibility: hidden; */
			display: none;
		}
	}

	/* 一般认为宽度小于768px的设备为手机 */
	@media screen and (max-width: 767px) {
		/* 手机样式 */
	}
</style>