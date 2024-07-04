<template>
	<view>
		<uni-group v-for="item in stationRes" :title="item.title+'    '+item.subtitle" top="20" mode="card">
			<view class="text-info">{{item.title}} 站</view>
			<view id="english">{{item.subtitle}} Station</view>
			<view id="btn" class="">
				<button class="btn btn-primany" @click="PlaySound(item.src)">报站</button>
				<button class="stop-play" @click="stopPlay()">停止播放</button>
			</view>

		</uni-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
#btn{
	display: flex;
	flex-direction: row;
}
</style>