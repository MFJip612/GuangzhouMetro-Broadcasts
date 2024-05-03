<template>
	<!-- <navigator url="/pages/line2/gzsrs2jhwg" delta="1">
		<view class="line">
			<view class="cn">
				<text>广州南站——嘉禾望岗</text>
			</view>
			<view class="en">
				<text>From Guangzhou South Railway Station towards Jiahewanggang</text>
			</view>
		</view>
	</navigator> -->
	<navigator url="/pages/line2/jhwg2gzsrs" delta="1">
		<view class="line">
			<view class="cn">
				<text>嘉禾望岗——广州南站</text>
			</view>
			<view class="en">
				<text>From Jiahewanggang towards Guangzhou South Railway Station</text>
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

<style lang="scss">
	navigator {
		width: initial;
	}

	.line {
		color: #fff;
		background-color: #00629B;
		border-radius: 20rpx;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		margin: 50rpx auto;

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