<template>
	<view>

		<uni-group v-for="item in stationRes" :title="item.title+'    '+item.subtitle" top="20" mode="card">
			<view>分组{{item.title}} 的内容</view>
			<view>The content of the group {{item.subtitle}}</view>
			<view class="btn-d">
				<button @click="PlaySound(item.src)">报站</button>
				<button class="stop-play" @click="stopPlay()">停止播放</button>
			</view>
		</uni-group>
	</view>
</template>

<script>
	export default {
		data() {
			const isPhone = false
			let innerAudioContext = uni.createInnerAudioContext();

			function PlaySound(src) {
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
				innerAudioContext.pause()
			}
			return {
				PlaySound,
				stopPlay,
				isPhone,
				stationRes: [{
					title: '西塱',
					subtitle: 'Xilang',
					src: 'https://download.zhengxian.top/l1bzgbc/Xilang.mp3'
				}, {
					title: '坑口',
					subtitle: 'Kengkou',
					src: 'https://download.zhengxian.top/l1bzgbc/Kengkou.mp3'
				}, {
					title: '花地湾',
					subtitle: 'Huadiwan',
					src: 'https://download.zhengxian.top/l1bzgbc/Huadiwan.mp3'
				}, {
					title: '芳村',
					subtitle: 'Fangcun',
					src: 'https://download.zhengxian.top/l1bzgbc/Fangcun.mp3'
				}, {
					title: '黄沙',
					subtitle: 'Huangsha',
					src: 'https://download.zhengxian.top/l1bzgbc/Huangsha.mp3'
				}, {
					title: '长寿路',
					subtitle: 'Changshoulu',
					src: 'https://download.zhengxian.top/l1bzgbc/Changshoulu.mp3'
				}, {
					title: '陈家祠',
					subtitle: 'Chen Clan Academy',
					src: 'https://download.zhengxian.top/l1bzgbc/Chenjiaci.mp3'
				}, {
					title: '西门口',
					subtitle: 'Ximenkou',
					src: 'https://download.zhengxian.top/l1bzgbc/Ximenkou.mp3'
				}, {
					title: '公园前',
					subtitle: 'Gongyuanqian',
					src: 'https://download.zhengxian.top/l1bzgbc/Gongyuanqian.mp3'
				}, {
					title: '农讲所',
					subtitle: 'Peasant Movement Institute',
					src: 'https://download.zhengxian.top/l1bzgbc/Nongjiangsuo.mp3'
				}, {
					title: '烈士陵园',
					subtitle: 'Martyrs\' Park',
					src: 'https://download.zhengxian.top/l1bzgbc/Lieshilingyuan.mp3'
				}, {
					title: '东山口',
					subtitle: 'Dongshankou',
					src: 'https://download.zhengxian.top/l1bzgbc/Dongshankou.mp3'
				}, {
					title: '杨箕',
					subtitle: 'Yangji',
					src: 'https://download.zhengxian.top/l1bzgbc/Yangji.mp3'
				}, {
					title: '体育西路',
					subtitle: 'Tiyu Xilu',
					src: 'https://download.zhengxian.top/l1bzgbc/Tiyuxilu.mp3'
				}, {
					title: '体育中心',
					subtitle: 'Tianhe Sports Center',
					src: 'https://download.zhengxian.top/l1bzgbc/Tiyuzhongxin.mp3'
				}, {
					title: '广州东站',
					subtitle: 'Guangzhou East Railway Station',
					src: 'https://download.zhengxian.top/l1bzgbc/Guangzhoudongzhan.mp3'
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

	.btn-d {
		display: flex;
	}
</style>