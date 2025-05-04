<template>
	<view>
		<uni-group v-for="item in stationRes" :key="item.title" :title="`${item.title} ${item.subtitle}`" top="20"
			mode="card" class="station">
			<view>{{ item.title }} 站</view>
			<view>{{ item.subtitle }} Station</view>
			<view class="btnGroup">
				<button @click="playSound(item.src)">报站</button>
				<button class="stop-play" @click="stopPlay()">停止播放</button>
			</view>
		</uni-group>
	</view>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
	name: 'Apn2Pys',
	setup() {
		const isPhone = ref(false);
		const innerAudioContext = ref(null);
		const stationRes = ref([]);

		// 获取站点资源
		const getStationRes = async () => {
			try {
				const response = await fetch(
					'https://broadcast-1304995454.cos.ap-guangzhou.myqcloud.com/res2.json'
				);
				if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

				const data = await response.json();
				const keywords = ['AirportNToPanyuSquare', 'AirportNStart'];
				stationRes.value = data.stationRes.filter((station) =>
					keywords.some((keyword) => station.destination.includes(keyword))
				);
			} catch (error) {
				console.error('Error fetching station resources:', error);
			}
		};

		// 播放音频
		const playSound = (src) => {
			if (innerAudioContext.value) {
				innerAudioContext.value.pause();
				innerAudioContext.value.src = src;
				innerAudioContext.value.play();
			}
		};

		// 停止播放
		const stopPlay = () => {
			if (innerAudioContext.value) {
				innerAudioContext.value.pause();
			}
		};

		// 初始化音频上下文
		onMounted(() => {
			innerAudioContext.value = uni.createInnerAudioContext();
			getStationRes();
		});

		// 销毁音频上下文
		onUnmounted(() => {
			if (innerAudioContext.value) {
				innerAudioContext.value.pause();
				innerAudioContext.value.destroy();
			}
		});

		return {
			isPhone,
			stationRes,
			playSound,
			stopPlay,
		};
	},
};
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