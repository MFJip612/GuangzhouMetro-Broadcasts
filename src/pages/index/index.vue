<template>
	<view class="content">
		<uni-notice-bar show-icon scrollable single
			text="欢迎投稿更多线路! 本网站目前有1, 2, 3, 5, 10, 12号线的线路报站,敬请期待其他线路! "></uni-notice-bar>
		<image src="/static/images/Guangzhou_Metro_logo.svg" style="width: 100%;height: 80rpx;" mode="aspectFit">
		</image>
		<view class="choose">
			<navigator url="/pages/line1/line1">
				<view class="line line-1 text-black">
					<text class="num">1</text>
					<view class="col">
						<text class="cn">号线</text>
						<text class="en">Line 1</text>
					</view>
				</view>
			</navigator>
			<navigator url="/pages/line2/line2">
				<view class="line line-2">
					<text class="num">2</text>
					<view class="col">
						<text class="cn">号线</text>
						<text class="en">Line 2</text>
					</view>
				</view>
			</navigator>
			<navigator url="/pages/line3/B4/index">
				<view class="line line-3">
					<text class="num">3</text>
					<view class="col">
						<text class="cn">号线</text>
						<text class="en">Line 3</text>
					</view>
				</view>
			</navigator>
			<navigator url="/pages/line4/line4">
				<view class="line line-4 disable">
					<text class="num">4</text>
					<view class="col">
						<text class="cn">号线</text>
						<text class="en">Line 4</text>
					</view>
				</view>
			</navigator>
			<navigator url="/pages/line5/line5">
				<view class="line line-5">
					<text class="num">5</text>
					<view class="col">
						<text class="cn">号线</text>
						<text class="en">Line 5</text>
					</view>
				</view>
			</navigator>
			<navigator url="/pages/line6/line6">
				<view class="line line-6 disable">
					<text class="num">6</text>
					<view class="col">
						<text class="cn">号线</text>
						<text class="en">Line 6</text>
					</view>
				</view>
			</navigator>
			<view class="line line-7 disable">
				<text class="num">7</text>
				<view class="col">
					<text class="cn">号线</text>
					<text class="en">Line 7</text>
				</view>
			</view>
			<navigator url="/pages/line8/line8">
				<view class="line line-8 disable">
					<text class="num">8</text>
					<view class="col">
						<text class="cn">号线</text>
						<text class="en">Line 8</text>
					</view>
				</view>
			</navigator>
			<navigator>
				<view class="line line-9 text-black disable">
					<text class="num">9</text>
					<view class="col">
						<text class="cn">号线</text>
						<text class="en">Line 9</text>
					</view>
				</view>
			</navigator>
			<navigator url="/pages/line10/line10">
				<view class="line line-10 ">
					<text class="num">10</text>
					<view class="col">
						<text class="cn">号线</text>
						<text class="en">Line 10</text>
					</view>
				</view>
			</navigator>
			<navigator url="">
				<view class="line line-11 text-black disable">
					<text class="num">11</text>
					<view class="col">
						<text class="cn">号线</text>
						<text class="en">Line 11</text>
					</view>
				</view>
			</navigator>
			<navigator url="/pages/line12/line12">
				<view class="line line-12">
					<text class="num">12</text>
					<view class="col">
						<text class="cn">号线</text>
						<text class="en">Line 12</text>
					</view>
				</view>
			</navigator>
			<navigator>
				<view class="line line-13 disable">
					<text class="num">13</text>
					<view class="col">
						<text class="cn">号线</text>
						<text class="en">Line 13</text>
					</view>
				</view>
			</navigator>
			<navigator>
				<view class="line line-14 disable">
					<text class="num">14</text>
					<view class="col">
						<text class="cn">号线</text>
						<text class="en">Line 14</text>
					</view>
				</view>
			</navigator>
			<navigator>
				<view class="line line-18 disable">
					<text class="num">18</text>
					<view class="col">
						<text class="cn">号线</text>
						<text class="en">Line 18</text>
					</view>
				</view>
			</navigator>
			<navigator>
				<view class="line line-21 disable">
					<text class="num">21</text>
					<view class="col">
						<text class="cn">号线</text>
						<text class="en">Line 21</text>
					</view>
				</view>
			</navigator>
			<navigator url="/pages/line22/line22">
				<view class="line line-22">
					<text class="num">22</text>
					<view class="col">
						<text class="cn">号线</text>
						<text class="en">Line 22</text>
					</view>
				</view>
			</navigator>
			<navigator>
				<view class="line line-gf disable">
					<view class="col">
						<text class="cn">广佛线</text>
						<text class="en">Guangfo Line</text>
					</view>
				</view>
			</navigator>
			<navigator>
				<view class="line line-apm disable">
					<text class="num">APM</text>
					<view class="col">
						<text class="cn">线</text>
						<text class="en">Line</text>
					</view>
				</view>
			</navigator>
			<navigator>
				<view class="line line-intercity guangqing disable">
					<view class="col">
						<text class="cn">广清城际</text>
						<text class="en">Guangzhou-Qingyuan Intercity</text>
					</view>
				</view>
			</navigator>
			<navigator>
				<view class="line line-intercity donghuan disable">
					<view class="col">
						<text class="cn">广州东环城际</text>
						<text class="en">Guangzhou East Ring Intercity</text>
					</view>
				</view>
			</navigator>
			<navigator>
				<view class="line line-intercity disable">
					<view class="col">
						<text class="cn">广惠城际</text>
						<text class="en">Guangzhou-Huizhou Intercity</text>
					</view>
				</view>
			</navigator>
			<navigator>
				<view class="line line-intercity disable">
					<view class="col">
						<text class="cn">琶莲城际</text>
						<text class="en">Pazhou-Lianhuashan Intercity</text>
					</view>
				</view>
			</navigator>
			<navigator url="/pages/guangzhou-zhaoqing-intercity/guangzhou-zhaoqing-intercity">
				<view class="line line-intercity">
					<view class="col">
						<text class="cn">广肇城际</text>
						<text class="en">Guangzhou-Zhaoqing Intercity</text>
					</view>
				</view>
			</navigator>
		</view>
		<view class="text-area"
			style="justify-content: center;display: flex;flex-direction: column;align-items: center;">
			<!-- <text class="title">由 <uni-link href="https://blog.zhengxian.top/" text="@380AM-0204">@380AM-0204</uni-link>
				提供文件服务</text> -->
			<text class="title">由 <uni-link href="https://space.bilibili.com/9033373/" text="@红茶w">@红茶w</uni-link>
				提供报站资源</text>
			<text class="title"><uni-link href="https://forms.office.com/r/15t2jNb82h">
					<image src="/static/images/QRCode.png" mode="aspectFit"></image>
				</uni-link></text>
		</view>
	</view>
</template>

<script>
// import '/static/js/protect.js'
export default {
	data() {
		return {

		}
	},
	onLoad() { },
	methods: {

	}
}
</script>

<style lang="scss" scoped>
navigator {
	width: initial;
}

.content {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}

.choose {
	width: 25rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	flex-wrap: wrap;
	justify-content: space-around;
	// margin: 50rpx;

	/* 网页端适配 - 在大屏幕上使用更大的容器宽度 */
	@media screen and (min-width: 768px) {
		width: 100%;
		max-width: 1200px;
	}

	/* 网页端适配 - 在超大屏幕上增加间距 */
	@media screen and (min-width: 1200px) {
		padding: 0 20px;
	}
}

.line {
	margin: 10rpx;
	padding-left: 5rpx;
	padding-right: 10rpx;
	position: relative;
	width: 280rpx;
	border-radius: 20rpx;
	display: flex;
	text-align: center;
	justify-content: center;
	align-items: center;
	color: #FFF;

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

.text-black {
	color: #000;
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

.line-10 {
	background-color: #7D9CC0;
}

.line-11 {
	background-color: #ffb00a;
}

.line-12 {
	background-color: #59621D;
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

.line-intercity {
	min-width: 20rem;
	height: 4.5834rem;
	color: #FFF;
	background-color: #2a5aa6;
	border-radius: 10rpx;

	.col {
		.cn {
			font-size: 2.1rem;
		}

		.en {
			font-size: 1.1rem;
		}
	}
}

.disable {
	color: #FFF;
	background-color: gray;
}

/* 网页端适配 - 底部信息区域 */
@media screen and (min-width: 768px) {
	.text-area {
		margin-top: 20px;
	}
}
</style>