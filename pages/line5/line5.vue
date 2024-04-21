<template>
	<view>
		<navigator url="/pages/line5/jk2hpnp" delta="1">
			<view class="line">
				<view class="cn">
					<text>滘口——黄埔新港</text>
				</view>
				<view class="en">
					<text>From Jiaokou towards Huangpu New Port</text>
				</view>
			</view>
		</navigator>
		<!-- <navigator url="/pages/line5/hpnp2jk" delta="1">
			<view class="line">
				<view class="cn">
					<text>黄埔新港——滘口</text>
				</view>
				<view class="en">
					<text>From Huangpu New Port towards Jiaokou</text>
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
		background-color: #C5003E;
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