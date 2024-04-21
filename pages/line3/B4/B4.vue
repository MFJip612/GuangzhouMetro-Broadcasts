<template>
	<view>
		<navigator url="/pages/line3/B4/apn2pys" delta="1">
			<view class="line">
				<view class="cn">
					<text>机场北——番禺广场</text>
				</view>
				<view class="en">
					<text>From Airport N. towards Panyu Square</text>
				</view>
			</view>
		</navigator>
		<!-- <navigator url="/pages/line3/B4/apn2tyxl" delta="1">
			<view class="line">
				<view class="cn">
					<text>机场北——体育西路</text>
				</view>
				<view class="en">
					<text>From Airport N. towards Tiyu Xilu</text>
				</view>
			</view>
		</navigator> -->
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
		color: #fff;
		background-color: #ECA154;
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