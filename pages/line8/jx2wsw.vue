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
						title: '滘心',
						subtitle: 'Jiaoxin',
						src: 'https://vip.123pan.cn/1812581465/broadcast/8/2js/js.mp3'
					},
					{
						title: '亭岗',
						subtitle: 'Tinggang',
						src: 'https://vip.123pan.cn/1812581465/broadcast/8/2wsw/tg.mp3'
					},
					{
						title:'石井',
						subtitle:'Shijing'
					},
					{
						title: '小坪',
						subtitle: 'Xiaoping'
					},
					{
						title:'石潭',
						subtitle:'Shitan'
					}
				]
			}
		}
	}
</script>

<style>

</style>