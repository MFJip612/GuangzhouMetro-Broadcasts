<template>
	<!-- <navigator url="/pages/line8/wsw2jx" delta="1">
		<view class="line">
			<view class="cn">
				<text>万胜围——滘心</text>
			</view>
			<view class="en">
				<text>From Wanshengwei towards Jiaoxin</text>
			</view>
		</view>
	</navigator> -->
	<navigator url="/pages/line8/jx2wsw" delta="1">
		<view class="line">
			<view class="cn">
				<text>滘心——万胜围</text>
			</view>
			<view class="en">
				<text>From Jiaoxin towards Wanshengwei</text>
			</view>
		</view>
	</navigator>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
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
		background-color: #008C95;
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