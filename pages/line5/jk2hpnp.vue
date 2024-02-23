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
					title: '滘口',
					subtitle: 'Jiaokou',
					src: 'https://download.zhengxian.top/l5whpxg/Jiaokou.mp3'
				}, {
					title: '坦尾',
					subtitle: 'Tanwei',
					src: 'https://download.zhengxian.top/l5whpxg/Tanwei.mp3'
				}, {
					title: '中山八',
					subtitle: 'Zhongshanba',
					src: 'https://download.zhengxian.top/l5whpxg/Zhongshanba.mp3'
				}, {
					title: '西场',
					subtitle: 'Xichang',
					src: 'https://download.zhengxian.top/l5whpxg/Xichang.mp3'
				}, {
					title: '西村',
					subtitle: 'Xicun',
					src: 'https://download.zhengxian.top/l5whpxg/Xicun.mp3'
				}, {
					title: '广州火车站',
					subtitle: 'Guangzhou Railway Station',
					src: 'https://download.zhengxian.top/l5whpxg/GuangzhouRailwayStation.mp3'
				}, {
					title: '小北',
					subtitle: 'Xiaobei',
					src: 'https://download.zhengxian.top/l5whpxg/Xiaobei.mp3'
				}, {
					title: '淘金',
					subtitle: 'Taojin',
					src: 'https://download.zhengxian.top/l5whpxg/Taojin.mp3'
				}, {
					title: '区庄',
					subtitle: 'Ouzhuang',
					src: 'https://download.zhengxian.top/l5whpxg/Ouzhuang.mp3'
				}, {
					title: '动物园',
					subtitle: 'Zoo',
					src: 'https://download.zhengxian.top/l5whpxg/Zoo.mp3'
				}, {
					title: '杨箕',
					subtitle: 'Yangji',
					src: 'https://download.zhengxian.top/l5whpxg/Yangji.mp3'
				}, {
					title: '五羊邨',
					subtitle: 'Wuyangcun',
					src: 'https://download.zhengxian.top/l5whpxg/Wuyangcun.mp3'
				}, {
					title: '珠江新城',
					subtitle: 'Zhujiang New Town',
					src: 'https://download.zhengxian.top/l5whpxg/ZhujiangNewTown.mp3'
				}, {
					title: '猎德',
					subtitle: 'Liede',
					src: 'https://download.zhengxian.top/l5whpxg/Liede.mp3'
				}, {
					title: '潭村',
					subtitle: 'Tancun',
					src: 'https://download.zhengxian.top/l5whpxg/Tancun.mp3'
				}, {
					title: '员村',
					subtitle: 'Yuancun',
					src: 'https://download.zhengxian.top/l5whpxg/Yuancun.mp3'
				}, {
					title: '科韵路',
					subtitle: 'Keyun Lu',
					src: 'https://download.zhengxian.top/l5whpxg/KeyunLu.mp3',

				}, {
					title: '车陂南',
					subtitle: 'Chebeinan',
					src: 'https://download.zhengxian.top/l5whpxg/Chebeinan.mp3'
				}, {
					title: '东圃',
					subtitle: 'Dongpu',
					src: 'https://download.zhengxian.top/l5whpxg/Dongpu.mp3'
				}, {
					title: '三溪',
					subtitle: 'Sanxi',
					src: 'https://download.zhengxian.top/l5whpxg/Sanxi.mp3'
				}, {
					title: '鱼珠',
					subtitle: 'Yuzhu',
					src: 'https://download.zhengxian.top/l5whpxg/Yuzhu.mp3'
				}, {
					title: '大沙地',
					subtitle: 'Dashadi',
					src: 'https://download.zhengxian.top/l5whpxg/Dashadi.mp3'
				}, {
					title: '大沙东',
					subtitle: 'Dashadong',
					src: 'https://download.zhengxian.top/l5whpxg/Dashadong.mp3'
				}, {
					title: '文冲',
					subtitle: 'Wenchong',
					src: 'https://download.zhengxian.top/l5whpxg/Wenchong.mp3'
				}, {
					title: '双沙',
					subtitle: 'Shuangsha',
					src: 'https://download.zhengxian.top/l5whpxg/Shuangsha.mp3'
				}, {
					title: '庙头',
					subtitle: 'Miaotou',
					src: 'https://download.zhengxian.top/l5whpxg/Miaotou.mp3'
				}, {
					title: '夏园',
					subtitle: 'Xiayuan',
					src: 'https://download.zhengxian.top/l5whpxg/Xiayuan.mp3'
				}, {
					title: '保盈大道',
					subtitle: 'Baoying Dadao',
					src: 'https://download.zhengxian.top/l5whpxg/BaoyingDadao.mp3'
				}, {
					title: '夏港',
					subtitle: 'Xiagang',
					src: 'https://download.zhengxian.top/l5whpxg/Xiagang.mp3'
				}, {
					title: '黄埔新港',
					subtitle: 'Huangpu New Port',
					src: 'https://download.zhengxian.top/l5whpxg/HuangpuNewPort.mp3'
				}]
			}
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