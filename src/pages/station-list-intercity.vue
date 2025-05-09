<template>
	<view>
		<uni-group v-for="(item, index) in stationRes" :key="item.title" :title="`${item.title} ${item.subtitle}`"
			class="station" mode="card">
			<view class="station-content">
				<view>{{ item.title }} 站</view>
				<view>{{ item.subtitle }} Railway Station</view>
				<view class="btnGroup">
					<button @click="playSound(item.src)">报站</button>
					<button class="stop-play" @click="stopPlay()">停止播放</button>
				</view>
			</view>
		</uni-group>
	</view>
</template>

<script setup>
import {
	ref
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
		const line = route.query.line || '72';
		const key1 = route.query.key1 || 'ZhaoqingToXiaojinkou';
		const key2 = route.query.key2 || 'ZhaoqingStart';
		const destination = route.query.towards || '2xjk';
		const isexpress = route.query.isexpress || 'local';

		const response = await fetch(
			`https://broadcast-1304995454.cos.ap-guangzhou.myqcloud.com/intercity/${line}-${destination}-${isexpress}.json`
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
</script>

<style></style>
