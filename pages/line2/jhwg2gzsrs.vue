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
					title: '嘉禾望岗',
					subtitle: 'Jiahewanggang',
					src: 'https://vip.123pan.cn/1812581465/broadcast/2/2jhwg/Jiahewanggang.mp3'
				}, {
					title: '黄边',
					subtitle: 'Huangbian',
					src: 'https://vip.123pan.cn/1812581465/broadcast/2/2gzsrs/Huangbian.mp3'
				}, {
					title: '江夏',
					subtitle: 'Jiangxia',
					src: 'https://vip.123pan.cn/1812581465/broadcast/2/2gzsrs/Jiangxia.mp3'
				}, {
					title: '萧岗',
					subtitle: 'Xiao-gang',
					src: 'https://vip.123pan.cn/1812581465/broadcast/2/2gzsrs/Xiao-gang.mp3'
				}, {
					title: '白云文化广场',
					subtitle: 'Baiyun Culture Square',
					src: 'https://vip.123pan.cn/1812581465/broadcast/2/2gzsrs/BaiyunCultureSquare.mp3'
				}, {
					title: '白云公园',
					subtitle: 'Baiyun Park',
					src: 'https://vip.123pan.cn/1812581465/broadcast/2/2gzsrs/BaiyunPark.mp3'
				}, {
					title: '飞翔公园',
					subtitle: 'Feixiang Park',
					src: 'https://vip.123pan.cn/1812581465/broadcast/2/2gzsrs/FeixiangPark.mp3'
				}, {
					title: '三元里',
					subtitle: 'Sanyuanli',
					src: 'https://vip.123pan.cn/1812581465/broadcast/2/2gzsrs/Sanyuanli.mp3'
				}, {
					title: '广州火车站',
					subtitle: 'Guangzhou Railway Station',
					src: 'https://vip.123pan.cn/1812581465/broadcast/2/2gzsrs/GuangzhouRailwayStation.mp3'
				}, {
					title: '越秀公园',
					subtitle: 'Yuexiu Park',
					src: 'https://vip.123pan.cn/1812581465/broadcast/2/2gzsrs/YuexiuPark.mp3'
				}, {
					title: '纪念堂',
					subtitle: 'Sun Yat-sen Memorial Jall',
					src: 'https://vip.123pan.cn/1812581465/broadcast/2/2gzsrs/SunYat-senMemorialHall.mp3'
				}, {
					title: '公园前',
					subtitle: 'Gongyuanqian',
					src: 'https://vip.123pan.cn/1812581465/broadcast/2/2gzsrs/Gongyuanqian.mp3'
				}, {
					title: '海珠广场',
					subtitle: 'Haizhu Square',
					src: 'https://vip.123pan.cn/1812581465/broadcast/2/2gzsrs/HaizhuSquare.mp3'
				}, {
					title: '市二宫',
					subtitle: 'The 2nd Worker\'s Cultural Palace',
					src: 'https://vip.123pan.cn/1812581465/broadcast/2/2gzsrs/The2ndWorker\'sCulturalPalace.mp3'
				}, {
					title: '江南西',
					subtitle: 'Tancun',
					src: 'https://vip.123pan.cn/1812581465/broadcast/2/2gzsrs/Tancun.mp3'
				}, {
					title: '昌岗',
					subtitle: 'Yuancun',
					src: 'https://vip.123pan.cn/1812581465/broadcast/2/2gzsrs/Yuancun.mp3'
				}, {
					title: '江泰路',
					subtitle: 'Keyun Lu',
					src: 'https://vip.123pan.cn/1812581465/broadcast/2/2gzsrs/KeyunLu.mp3',

				}, {
					title: '东晓南',
					subtitle: 'Chebeinan',
					src: 'https://vip.123pan.cn/1812581465/broadcast/2/2gzsrs/Chebeinan.mp3'
				}, {
					title: '南洲',
					subtitle: 'Dongpu',
					src: 'https://vip.123pan.cn/1812581465/broadcast/2/2gzsrs/Dongpu.mp3'
				}, {
					title: '洛溪',
					subtitle: 'Sanxi',
					src: 'https://vip.123pan.cn/1812581465/broadcast/2/2gzsrs/Sanxi.mp3'
				}, {
					title: '南浦',
					subtitle: 'Yuzhu',
					src: 'https://vip.123pan.cn/1812581465/broadcast/2/2gzsrs/Yuzhu.mp3'
				}, {
					title: '会江',
					subtitle: 'Dashadi',
					src: 'https://vip.123pan.cn/1812581465/broadcast/2/2gzsrs/Dashadi.mp3'
				}, {
					title: '石壁',
					subtitle: 'Dashadong',
					src: 'https://vip.123pan.cn/1812581465/broadcast/2/2gzsrs/Dashadong.mp3'
				}, {
					title: '广州南站',
					subtitle: 'Wenchong',
					src: 'https://vip.123pan.cn/1812581465/broadcast/2/2gzsrs/Wenchong.mp3'
				}]
			}
		}
	}
</script>

<style lang="scss">

</style>