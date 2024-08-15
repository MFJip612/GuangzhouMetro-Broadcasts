<template>
	<navigator url="/pages/line6/xfg2xx" delta="1">
		<view class="line">
			<view class="cn">
				<text>浔峰岗——香雪</text>
			</view>
			<view class="en">
				<text>From Xunfenggang towards Xiangxue</text>
			</view>
		</view>
	</navigator>
	<!-- <navigator url="/pages/line6/xx2xfg" delta="1">
		<view class="line">
			<view class="cn">
				<text>香雪——浔峰岗</text>
			</view>
			<view class="en">
				<text>From Xiangxue towards Xunfenggang</text>
			</view>
		</view>
	</navigator> -->
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
		background-color: #80225F;
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