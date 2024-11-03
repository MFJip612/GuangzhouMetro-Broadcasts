<template>
	<view>
		<uni-group v-for="item in stationRes" :title="item.title + '    ' + item.subtitle" top="20" mode="card">
			<view>{{ item.title }} 站</view>
			<view>{{ item.subtitle }} Station</view>
			<button @click="PlaySound(item.src)">报站</button>
			<button class="stop-play" @click="stopPlay()">停止播放</button>
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
				// stationRes: [{
				// 	title: '西塱',
				// 	subtitle: 'Xilang',
				// 	src: 'https://vip.123pan.cn/1829011389/azl/gb/l1gzd/Xilang.mp3'
				// }, {
				// 	title: '坑口',
				// 	subtitle: 'Kengkou',
				// 	src: 'https://vip.123pan.cn/1829011389/azl/gb/l1gzd/Kengkou.mp3'
				// }, {
				// 	title: '花地湾',
				// 	subtitle: 'Huadiwan',
				// 	src: 'https://vip.123pan.cn/1829011389/azl/gb/l1gzd/Huadiwan.mp3'
				// }, {
				// 	title: '芳村',
				// 	subtitle: 'Fangcun',
				// 	src: 'https://vip.123pan.cn/1829011389/azl/gb/l1gzd/Fangcun.mp3'
				// }, {
				// 	title: '黄沙',
				// 	subtitle: 'Huangsha',
				// 	src: 'https://vip.123pan.cn/1829011389/azl/gb/l1gzd/Huangsha.mp3'
				// }, {
				// 	title: '长寿路',
				// 	subtitle: 'Changshoulu',
				// 	src: 'https://vip.123pan.cn/1829011389/azl/gb/l1gzd/Changshoulu.mp3'
				// }, {
				// 	title: '陈家祠',
				// 	subtitle: 'Chen Clan Academy',
				// 	src: 'https://vip.123pan.cn/1829011389/azl/gb/l1gzd/Chenjiaci.mp3'
				// }, {
				// 	title: '西门口',
				// 	subtitle: 'Ximenkou',
				// 	src: 'https://vip.123pan.cn/1829011389/azl/gb/l1gzd/Ximenkou.mp3'
				// }, {
				// 	title: '公园前',
				// 	subtitle: 'Gongyuanqian',
				// 	src: 'https://vip.123pan.cn/1829011389/azl/gb/l1gzd/Gongyuanqian.mp3'
				// }, {
				// 	title: '农讲所',
				// 	subtitle: 'Peasant Movement Institute',
				// 	src: 'https://vip.123pan.cn/1829011389/azl/gb/l1gzd/Nongjiangsuo.mp3'
				// }, {
				// 	title: '烈士陵园',
				// 	subtitle: 'Martyrs\' Park',
				// 	src: 'https://vip.123pan.cn/1829011389/azl/gb/l1gzd/Lieshilingyuan.mp3'
				// }, {
				// 	title: '东山口',
				// 	subtitle: 'Dongshankou',
				// 	src: 'https://vip.123pan.cn/1829011389/azl/gb/l1gzd/Dongshankou.mp3'
				// }, {
				// 	title: '杨箕',
				// 	subtitle: 'Yangji',
				// 	src: 'https://vip.123pan.cn/1829011389/azl/gb/l1gzd/Yangji.mp3'
				// }, {
				// 	title: '体育西路',
				// 	subtitle: 'Tiyu Xilu',
				// 	src: 'https://vip.123pan.cn/1829011389/azl/gb/l1gzd/Tiyuxilu.mp3'
				// }, {
				// 	title: '体育中心',
				// 	subtitle: 'Tianhe Sports Center',
				// 	src: 'https://vip.123pan.cn/1829011389/azl/gb/l1gzd/Tiyuzhongxin.mp3'
				// }, {
				// 	title: '广州东站',
				// 	subtitle: 'Guangzhou East Railway Station',
				// 	src: 'https://vip.123pan.cn/1829011389/azl/gb/l1gzd/Guangzhoudongzhan.mp3'
				// }]
				stationRes: [{
					title: '西塱',
					subtitle: 'Xilang',
					src: 'https://vip.123pan.cn/1812581465/broadcast/1/%E5%BE%80%E8%A5%BF%E5%A1%B1/Xilang.mp3'
				}, {
					title: '坑口',
					subtitle: 'Kengkou',
					src: 'https://vip.123pan.cn/1812581465/broadcast/1/%E5%BE%80%E5%B9%BF%E5%B7%9E%E4%B8%9C%E7%AB%99/Kengkou.mp3'
				}, {
					title: '花地湾',
					subtitle: 'Huadiwan',
					src: 'https://vip.123pan.cn/1812581465/broadcast/1/%E5%BE%80%E5%B9%BF%E5%B7%9E%E4%B8%9C%E7%AB%99/Huadiwan.mp3'
				}, {
					title: '芳村',
					subtitle: 'Fangcun',
					src: 'https://vip.123pan.cn/1812581465/broadcast/1/%E5%BE%80%E5%B9%BF%E5%B7%9E%E4%B8%9C%E7%AB%99/Fangcun.mp3'
				}, {
					title: '黄沙',
					subtitle: 'Huangsha',
					src: 'https://vip.123pan.cn/1812581465/broadcast/1/%E5%BE%80%E5%B9%BF%E5%B7%9E%E4%B8%9C%E7%AB%99/Huangsha.mp3'
				}, {
					title: '长寿路',
					subtitle: 'Changshoulu',
					src: 'https://vip.123pan.cn/1812581465/broadcast/1/%E5%BE%80%E5%B9%BF%E5%B7%9E%E4%B8%9C%E7%AB%99/Changshoulu.mp3'
				}, {
					title: '陈家祠',
					subtitle: 'Chen Clan Academy',
					src: 'https://vip.123pan.cn/1812581465/broadcast/1/%E5%BE%80%E5%B9%BF%E5%B7%9E%E4%B8%9C%E7%AB%99/Chenjiaci.mp3'
				}, {
					title: '西门口',
					subtitle: 'Ximenkou',
					src: 'https://vip.123pan.cn/1812581465/broadcast/1/%E5%BE%80%E5%B9%BF%E5%B7%9E%E4%B8%9C%E7%AB%99/Ximenkou.mp3'
				}, {
					title: '公园前',
					subtitle: 'Gongyuanqian',
					src: 'https://vip.123pan.cn/1812581465/broadcast/1/%E5%BE%80%E5%B9%BF%E5%B7%9E%E4%B8%9C%E7%AB%99/Gongyuanqian.mp3'
				}, {
					title: '农讲所',
					subtitle: 'Peasant Movement Institute',
					src: 'https://vip.123pan.cn/1812581465/broadcast/1/%E5%BE%80%E5%B9%BF%E5%B7%9E%E4%B8%9C%E7%AB%99/Nongjiangsuo.mp3'
				}, {
					title: '烈士陵园',
					subtitle: 'Martyrs\' Park',
					src: 'https://vip.123pan.cn/1812581465/broadcast/1/%E5%BE%80%E5%B9%BF%E5%B7%9E%E4%B8%9C%E7%AB%99/Lieshilingyuan.mp3'
				}, {
					title: '东山口',
					subtitle: 'Dongshankou',
					src: 'https://vip.123pan.cn/1812581465/broadcast/1/%E5%BE%80%E5%B9%BF%E5%B7%9E%E4%B8%9C%E7%AB%99/Dongshankou.mp3'
				}, {
					title: '杨箕',
					subtitle: 'Yangji',
					src: 'https://vip.123pan.cn/1812581465/broadcast/1/%E5%BE%80%E5%B9%BF%E5%B7%9E%E4%B8%9C%E7%AB%99/Yangji.mp3'
				}, {
					title: '体育西路',
					subtitle: 'Tiyu Xilu',
					src: 'https://vip.123pan.cn/1812581465/broadcast/1/%E5%BE%80%E5%B9%BF%E5%B7%9E%E4%B8%9C%E7%AB%99/Tiyuxilu.mp3'
				}, {
					title: '体育中心',
					subtitle: 'Tianhe Sports Center',
					src: 'https://vip.123pan.cn/1812581465/broadcast/1/%E5%BE%80%E5%B9%BF%E5%B7%9E%E4%B8%9C%E7%AB%99/Tiyuzhongxin.mp3'
				}, {
					title: '广州东站',
					subtitle: 'Guangzhou East Railway Station',
					src: 'https://vip.123pan.cn/1812581465/broadcast/1/%E5%BE%80%E5%B9%BF%E5%B7%9E%E4%B8%9C%E7%AB%99/Guangzhoudongzhan.mp3'
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