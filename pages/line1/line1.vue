<template>
	<view>
		<navigator url="/pages/line1/xl2gzers" delta="1">
			<view class="line">
				<view class="cn">
					<text>西塱——广州东站</text>
				</view>
				<view class="en">
					<text>From Xilang towards Guangzhou East Railway Station</text>
				</view>
			</view>
		</navigator>
		<!-- <navigator url="/pages/line1/gzers2xl" delta="1">
			<view class="line">
				<view class="cn">
					<text>广州东站——西塱</text>
				</view>
				<view class="en">
					<text>From Guangzhou East Railway Station towards Xilang</text>
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
		background-color: #F3D03E;
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