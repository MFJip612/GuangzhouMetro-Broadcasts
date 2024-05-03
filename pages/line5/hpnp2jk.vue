<template>
	<view>
		<uni-group v-for="item in stationRes" :title="item.title+'    '+item.subtitle" top="20" mode="card">
			<view>{{item.title}} 站</view>
			<view>{{item.subtitle}} Station</view>
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
					title: '黄埔新港',
					subtitle: 'Huangpu New Port',
					src: 'https://download.zhengxian.top/l5whpxg/HuangpuNewPort.mp3'
				}, {
					title: '夏港',
					subtitle: 'Xiagang'
				}, {
					title: '保盈大道',
					subtitle: 'Baoying Dadao'
				}, {
					title: '夏园',
					subtitle: 'Xiayuan'
				}, {
					title: '庙头',
					subtitle: 'Miaotou'
				}, {
					title: '双沙',
					subtitle: 'Shuangsha'
				}, {
					title: '文冲',
					subtitle: 'Wenchong'
				}, {
					title: '大沙东',
					subtitle: 'Dashadong'
				}, {
					title: '大沙地',
					subtitle: 'Dashadi'
				}, {
					title: '鱼珠',
					subtitle: 'Yuzhu'
				}, {
					title: '三溪',
					subtitle: 'Sanxi'
				}, {
					title: '东圃',
					subtitle: 'Dongpu'
				}, {
					title: '车陂南',
					subtitle: 'Chebeinan'
				}, {
					title: '科韵路',
					subtitle: 'Keyun Lu'
				}, {
					title: '员村',
					subtitle: 'Yuancun',
					src: ''
				}, {
					title: '潭村',
					subtitle: 'Tancun',
				}, {
					title: '猎德',
					subtitle: 'Liede',
				}, {
					title: '珠江新城',
					subtitle: 'Zhujiang New Town',
				}, {
					title: '五羊邨',
					subtitle: 'Wuyangcun',
				}, {
					title: '杨箕',
					subtitle: 'Yangji',
				}, {
					title: '动物园',
					subtitle: 'Zoo',
				}, {
					title: '区庄',
					subtitle: 'Ouzhuang',
				}, {
					title: '淘金',
					subtitle: 'Taojin',
				}, {
					title: '小北',
					subtitle: 'Xiaobei',
				}, {
					title: '广州火车站',
					subtitle: 'Guangzhou Railway Station',
				}, {
					title: '西村',
					subtitle: 'Xicun',
				}, {
					title: '西场',
					subtitle: 'Xichang',
				}, {
					title: '中山八',
					subtitle: 'Zhongshanba',
				}, {
					title: '坦尾',
					subtitle: 'Tanwei',
				}, {
					title: '滘口',
					subtitle: 'Jiaokou',
					src: 'https://download.zhengxian.top/l5whpxg/Jiaokou.mp3'
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