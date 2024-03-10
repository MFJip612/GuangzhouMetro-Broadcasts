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
					src: 'https://download.zhengxian.top/l5whpxg/Jiaokou.mp3'
				}, {
					title: '机场南（1号航站楼）',
					subtitle: 'Airport S.(Terminal 1)',
					src: 'https://download.zhengxian.top/l5whpxg/Tanwei.mp3'
				}, {
					title: '高增',
					subtitle: 'Gaozeng',
					src: 'https://download.zhengxian.top/l5whpxg/Zhongshanba.mp3'
				}, {
					title: '人和',
					subtitle: 'Renhe',
					src: 'https://download.zhengxian.top/l5whpxg/Xichang.mp3'
				}, {
					title: '龙归',
					subtitle: 'Longgui',
					src: 'https://download.zhengxian.top/l5whpxg/Xicun.mp3'
				}, {
					title: '嘉禾望岗',
					subtitle: 'Jiahewanggang',
					src: 'https://download.zhengxian.top/l5whpxg/GuangzhouRailwayStation.mp3'
				}, {
					title: '白云大道北',
					subtitle: 'Baiyundadaobei',
					src: 'https://download.zhengxian.top/l5whpxg/Xiaobei.mp3'
				}, {
					title: '永泰',
					subtitle: 'Yongtai',
					src: 'https://download.zhengxian.top/l5whpxg/Taojin.mp3'
				}, {
					title: '同和',
					subtitle: 'Tonghe',
					src: 'https://download.zhengxian.top/l5whpxg/Ouzhuang.mp3'
				}, {
					title: '京溪南方医院',
					subtitle: 'Jingxi Nanfang Hospital',
					src: 'https://download.zhengxian.top/l5whpxg/Zoo.mp3'
				}, {
					title: '梅花园',
					subtitle: 'Meihuayuan',
					src: 'https://download.zhengxian.top/l5whpxg/Yangji.mp3'
				}, {
					title: '燕塘',
					subtitle: 'Yantang',
					src: 'https://download.zhengxian.top/l5whpxg/Wuyangcun.mp3'
				}, {
					title: '广州东站',
					subtitle: 'Guangzhou East Railway Station',
					src: 'https://download.zhengxian.top/l5whpxg/ZhujiangNewTown.mp3'
				}, {
					title: '林和西',
					subtitle: 'Linhexi',
					src: 'https://download.zhengxian.top/l5whpxg/Liede.mp3'
				}, {
					title: '体育西路',
					subtitle: 'Tiyu Xilu',
					src: 'https://download.zhengxian.top/l5whpxg/Tancun.mp3'
				}]
			}
		},
	methods: {

	}
	}
</script>

<style lang="scss">
	.btn-d{
		display: flex;
	}
</style>