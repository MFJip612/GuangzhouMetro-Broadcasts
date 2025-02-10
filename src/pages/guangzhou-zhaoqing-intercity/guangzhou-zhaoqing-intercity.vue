<template>
	<view>
		<!-- <navigator url="/pages/line2/gzsrs2jhwg" delta="1">
			<view class="line">
				<view class="cn">
					<text>广州南站——嘉禾望岗</text>
				</view>
				<view class="en">
					<text>Guangzhou South Railway Station towards Jiahewanggang</text>
				</view>
			</view>
		</navigator> -->
		<navigator url="/pages/guangzhou-zhaoqing-intercity/xiaojinkou-zhaoqing" delta="1">
			<view class="line">
				<view class="cn">
					<text>小金口——肇庆</text>
				</view>
				<view class="en">
					<text>Xiaojinkou Railway Station towards Zhaoqing Railway Station</text>
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
<style lang="scss" scoped>
	navigator {
		width: initial;
	}

	.line {
		height: 4.5834rem;
		padding: 1% 2%;
		width: auto;
		color: #FFF;
		background-color: rgb(42, 90, 166);
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
</style>