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
					title: '机场北（2号航站楼）',
					subtitle: 'Airport N.(Terminal 2)',
					src: 'https://vip.123pan.cn/1812581465/broadcast/3/B4/2apn/AirportN.mp3'
				}, {
					title: '机场南（1号航站楼）',
					subtitle: 'Airport S.(Terminal 1)',
					src: 'https://vip.123pan.cn/1812581465/broadcast/3/B4/2pys/AirportS.mp3'
				}, {
					title: '高增',
					subtitle: 'Gaozeng',
					src: 'https://vip.123pan.cn/1812581465/broadcast/3/B4/2pys/Gaozeng.mp3'
				}, {
					title: '人和',
					subtitle: 'Renhe',
					src: 'https://vip.123pan.cn/1812581465/broadcast/3/B4/2pys/Renhe.mp3'
				}, {
					title: '龙归',
					subtitle: 'Longgui',
					src: 'https://vip.123pan.cn/1812581465/broadcast/3/B4/2pys/Longgui.mp3'
				}, {
					title: '嘉禾望岗',
					subtitle: 'Jiahewanggang',
					src: 'https://vip.123pan.cn/1812581465/broadcast/3/B4/2pys/Jiahewanggang.mp3'
				}, {
					title: '白云大道北',
					subtitle: 'Baiyundadaobei',
					src: 'https://vip.123pan.cn/1812581465/broadcast/3/B4/2pys/Baiyundadaobei.mp3'
				}, {
					title: '永泰',
					subtitle: 'Yongtai',
					src: 'https://vip.123pan.cn/1812581465/broadcast/3/B4/2pys/Yongtai.mp3'
				}, {
					title: '同和',
					subtitle: 'Tonghe',
					src: 'https://vip.123pan.cn/1812581465/broadcast/3/B4/2pys/Tonghe.mp3'
				}, {
					title: '京溪南方医院',
					subtitle: 'Jingxi Nanfang Hospital',
					src: 'https://vip.123pan.cn/1812581465/broadcast/3/B4/2pys/JingxiNanfangHospital.mp3'
				}, {
					title: '梅花园',
					subtitle: 'Meihuayuan',
					src: 'https://vip.123pan.cn/1812581465/broadcast/3/B4/2pys/Meihuayuan.mp3'
				}, {
					title: '燕塘',
					subtitle: 'Yantang',
					src: 'https://vip.123pan.cn/1812581465/broadcast/3/B4/2pys/Yantang.mp3'
				}, {
					title: '广州东站',
					subtitle: 'Guangzhou East Railway Station',
					src: 'https://vip.123pan.cn/1812581465/broadcast/3/B4/2pys/GuangzhouEastRailwayStation.mp3'
				}, {
					title: '林和西',
					subtitle: 'Linhexi',
					src: 'https://vip.123pan.cn/1812581465/broadcast/3/B4/2pys/Linhexi.mp3'
				}, {
					title: '体育西路',
					subtitle: 'Tiyu Xilu',
					src: 'https://vip.123pan.cn/1812581465/broadcast/3/B4/2pys/TiyuXilu.mp3'
				}, {
					title: '珠江新城',
					subtitle: 'Zhujiang New Town',
					src: 'https://vip.123pan.cn/1812581465/broadcast/3/B4/2pys/ZhujiangNewTown.mp3'
				}, {
					title: '广州塔',
					subtitle: 'Canton Tower',
					src: 'https://vip.123pan.cn/1812581465/broadcast/3/B4/2pys/CantonTower.mp3',

				}, {
					title: '客村',
					subtitle: 'Kecun',
					src: 'https://vip.123pan.cn/1812581465/broadcast/3/B4/2pys/Kecun.mp3'
				}, {
					title: '大塘',
					subtitle: 'Datang',
					src: 'https://vip.123pan.cn/1812581465/broadcast/3/B4/2pys/Datang.mp3'
				}, {
					title: '沥滘',
					subtitle: 'Lijiao',
					src: 'https://vip.123pan.cn/1812581465/broadcast/3/B4/2pys/Lijiao.mp3'
				}, {
					title: '厦滘',
					subtitle: 'Xiajiao',
					src: 'https://vip.123pan.cn/1812581465/broadcast/3/B4/2pys/Xiajiao.mp3'
				}, {
					title: '大石',
					subtitle: 'Dashi',
					src: 'https://vip.123pan.cn/1812581465/broadcast/3/B4/2pys/Dashi.mp3'
				}, {
					title: '汉溪长隆',
					subtitle: 'Hanxi Changlong',
					src: 'https://vip.123pan.cn/1812581465/broadcast/3/B4/2pys/HanxiChanglong.mp3'
				}, {
					title: '石桥',
					subtitle: 'Shiqiao',
					src: 'https://vip.123pan.cn/1812581465/broadcast/3/B4/2pys/Shiqiao.mp3'
				}, {
					title: '番禺广场',
					subtitle: 'Panyu Square',
					src: 'https://vip.123pan.cn/1812581465/broadcast/3/B4/2pys/PanyuSquare.mp3'
				}]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.btn-d {
		display: flex;
	}
</style>