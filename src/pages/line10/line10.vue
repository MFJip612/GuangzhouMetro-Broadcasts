<template>
	<view>
		<navigator url="/pages/station-list?line=10&towards=yje&key1=YangjiEast&key2=XilangStart" delta="1">
			<view class="line">
				<view class="cn">
					<text>西塱——杨箕东</text>
				</view>
				<view class="en">
					<text>Xilang towards Yangji East</text>
				</view>
			</view>
		</navigator>
		<!-- <navigator url="/pages/station-list?line=12&towards=hemcs&key1=HEMCS&key2=ErshaIslandStart" delta="1">
			<view class="line">
				<view class="cn">
					<text>二沙岛——大学城南</text>
				</view>
				<view class="en">
					<text>Ersha Island towards Higher Education Mega Centre S.</text>
				</view>
			</view>
		</navigator> -->
	</view>
	<!-- <Sign to_cn="南沙客运港" to_en="Nansha Passenger Port" via_cn="大学城南" via_en="Higher Education Mega Centre S."/> -->
</template>
<script setup>
	import Sign from "@/components/Sign.vue"
</script>
<style lang="scss" scoped>
	navigator {
		width: initial;
	}

	.line {
		margin: 50rpx auto;
		padding: 10rpx;
		width: max-content;
		color: #fff;
		background-color: #7D9CC0;
		border-radius: 20rpx;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;

		.cn {
			font-family: '黑体';
			font-size: 2rem;
		}

		.en {
			font-family: 'Arial';
			font-size: 1.2rem;
		}
	}
</style>