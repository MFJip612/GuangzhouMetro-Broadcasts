<template>
	<view>
		<uni-section type="line">
			<uni-group v-for="(item, index) in stationRes" :key="item.title" :title="`${item.title} ${item.subtitle}`"
				class="station" mode="card">
				<view class="station-content">
					<!-- 判断是否需要添加“站” -->
					<view>{{ item.title.endsWith('站') ? item.title : `${item.title} 站` }}</view>
					<!-- 判断是否需要添加“Station” -->
					<view>{{ item.subtitle.endsWith('Railway Station') ? item.subtitle : `${item.subtitle} Station` }}
					</view>
					<view class="btnGroup">
						<button @click="playSound(item.src)">报站</button>
						<button class="stop-play" @click="stopPlay()">停止播放</button>
					</view>
				</view>
			</uni-group>
		</uni-section>
	</view>
</template>

<script setup>
	import {
		ref,
		onMounted,
		onUnmounted
	} from 'vue';
	import {
		useRoute
	} from 'vue-router';

	const route = useRoute();
	const isPhone = ref(false);
	const innerAudioContext = ref(null);
	const stationRes = ref([]);

	// 获取站点资源
	const getStationRes = async () => {
		try {
			// 从 URL 参数中获取 line、key1 和 key2 的值
			const line = route.query.line || 'res2';
			const key1 = route.query.key1 || 'AirportNToPanyuSquare';
			const key2 = route.query.key2 || 'AirportNStart';
			const destination = route.query.towards;

			const response = await fetch(
				`https://broadcast-1304995454.cos.ap-guangzhou.myqcloud.com/${line}-${destination}.json`
			);
			if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

			const data = await response.json();
			const keywords = [key1, key2];
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
</script>

<style>
	.station-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.btnGroup {
		display: flex;
		justify-content: center;
		gap: 10px;
		margin-top: 10px;
	}

	button {
		width: 200rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.station {
		width: auto;
	}
</style>