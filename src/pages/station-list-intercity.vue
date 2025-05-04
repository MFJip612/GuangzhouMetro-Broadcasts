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
</script>

<style></style>
