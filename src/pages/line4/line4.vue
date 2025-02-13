<template>
	<view>
		<navigator url="" delta="1">
			<view class="line">
				<view class="cn">
					<text>南沙客运港——黄村</text>
				</view>
				<view class="en">
					<text>Nansha Passenger Port towards Huangcun</text>
				</view>
			</view>
		</navigator>
	</view>
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
		margin: 50rpx auto;
		padding: 10rpx;
		width: max-content;
		color: #fff;
		background-color: #00843D;
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