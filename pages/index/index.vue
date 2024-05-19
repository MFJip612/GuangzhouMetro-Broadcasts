<template>
	<view class="content">
		<image src="/static/images/Guangzhou_Metro_logo.svg" style="width: 100%;height: 80rpx;"></image>
		<view class="choose">
			<navigator url="/pages/line1/line1">
				<view class="line line-1">
					<text class="num">1</text>
					<view class="col">
						<text class="cn">号线</text>
						<text class="en">Line 1</text>
					</view>
				</view>
			</navigator>
			<navigator url="/pages/line2/line2">
				<view class="line line-2 color-white">
					<text class="num">2</text>
					<view class="col">
						<text class="cn">号线</text>
						<text class="en">Line 2</text>
					</view>
				</view>
			</navigator>
			<navigator url="/pages/line3/line3">
				<view class="line line-3 color-white">
					<text class="num">3</text>
					<view class="col">
						<text class="cn">号线</text>
						<text class="en">Line 3</text>
					</view>
				</view>
			</navigator>
			<!-- <view class="line line-4">
				<text class="num">4</text>
				<view class="col">
					<text class="cn">号线</text>
					<text class="en">Line 4</text>
				</view>
			</view> -->
			<navigator url="/pages/line5/line5">
				<view class="line line-5 color-white">
					<text class="num">5</text>
					<view class="col">
						<text class="cn">号线</text>
						<text class="en">Line 5</text>
					</view>
				</view>
			</navigator>
			<!-- <view class="line line-6 color-white">
				<text class="num">6</text>
				<view class="col">
					<text class="cn">号线</text>
					<text class="en">Line 6</text>
				</view>
			</view>
			<view class="line line-7 color-white">
				<text class="num">7</text>
				<view class="col">
					<text class="cn">号线</text>
					<text class="en">Line 7</text>
				</view>
			</view>
			<view class="line line-8 color-white">
				<text class="num">8</text>
				<view class="col">
					<text class="cn">号线</text>
					<text class="en">Line 8</text>
				</view>
			</view>
			<view class="line line-9">
				<text class="num">9</text>
				<view class="col">
					<text class="cn">号线</text>
					<text class="en">Line 9</text>
				</view>
			</view>
			<view class="line line-13 color-white">
				<text class="num">13</text>
				<view class="col">
					<text class="cn">号线</text>
					<text class="en">Line 13</text>
				</view>
			</view>
			<view class="line line-14 color-white">
				<text class="num">14</text>
				<view class="col">
					<text class="cn">号线</text>
					<text class="en">Line 14</text>
				</view>
			</view>
			<view class="line line-18 color-white">
				<text class="num">18</text>
				<view class="col">
					<text class="cn">号线</text>
					<text class="en">Line 18</text>
				</view>
			</view>
			<view class="line line-21 color-white">
				<text class="num">21</text>
				<view class="col">
					<text class="cn">号线</text>
					<text class="en">Line 21</text>
				</view>
			</view>
			<view class="line line-22 color-white">
				<text class="num">22</text>
				<view class="col">
					<text class="cn">号线</text>
					<text class="en">Line 22</text>
				</view>
			</view>
			<view class="line line-gf">
				<view class="col">
					<text class="cn">广佛线</text>
					<text class="en">Guangfo Line</text>
				</view>
			</view>
			<view class="line line-apm color-white">
				<text class="num">APM</text>
				<view class="col">
					<text class="cn">线</text>
					<text class="en">Line</text>
				</view>
			</view> -->
		</view>
		<view class="text-area"
			style="justify-content: center;display: flex;flex-direction: column;align-items: center;">
			<text class="title">由 <uni-link href="https://blog.zhengxian.top/" text="380AM-0204"></uni-link>
				提供文件服务</text>
			<text class="title">由 <uni-link href="https://space.bilibili.com/9033373/" text="红茶w"></uni-link>
				提供报站资源</text>
		</view>
	</view>
</template>

<script>
	import '/static/js/protect.js'
	export default {
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	.choose {
		width: 750rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		flex-wrap: wrap;
		justify-content: space-around;
		margin: 50rpx;
	}

	.line {
		margin: 10rpx;
		position: relative;
		width: 280rpx;
		border-radius: 20rpx;
		display: flex;
		text-align: center;
		justify-content: center;
		align-items: center;

		.num {
			position: relative;
			text-align: center;
			font-size: 4rem;
			font-family: 'Arial';
		}

		.col {
			position: relative;
			display: flex;
			flex-direction: column;
			text-align: center;

			.cn {
				font-size: 2rem;
				font-family: '黑体';
			}

			.en {
				font-size: 1.2rem;
				font-family: 'Arial';
			}
		}
	}

	.color-white {
		color: #FFF;
	}

	.line-1 {
		background-color: #F3D03E;
	}

	.line-2 {
		color: #FFF;
		background-color: #00629B;
	}

	.line-3 {
		color: #FFF;
		background-color: #ECA154;
	}

	.line-4 {
		color: #FFF;
		background-color: #00843D;
	}

	.line-5 {
		color: #FFF;
		background-color: #C5003E;
	}

	.line-6 {
		color: #FFF;
		background-color: #80225F;
	}

	.line-7 {
		color: #FFF;
		background-color: #97D700;
	}

	.line-8 {
		color: #FFF;
		background-color: #008C95;
	}

	.line-9 {
		// color: #FFF;
		background-color: #71CC98;
	}

	.line-13 {
		color: #FFF;
		background-color: #8E8C13;
	}

	.line-14 {
		color: #FFF;
		background-color: #81312F;
	}

	.line-18 {
		color: #FFF;
		background-color: #0047BA;
	}

	.line-21 {
		color: #FFF;
		background-color: #211747;
	}

	.line-22 {
		color: #FFF;
		background-color: #CD5228;
	}

	.line-gf {
		height: 4.5834rem;
		color: #FFF;
		background-color: #C4D600;

		.col {
			.cn {
				font-size: 2.3rem;
			}

			.en {
				font-size: 1.25rem;
			}
		}
	}

	.line-apm {
		height: 4.5834rem;
		color: #FFF;
		background-color: #00B5E2;

		.num {
			font-size: 2.85rem;
		}
	}
</style>