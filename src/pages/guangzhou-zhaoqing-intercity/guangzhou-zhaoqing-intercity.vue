<template>
	<view>
		<view>
			<text class="train_type" id="local">站站停</text>
			<navigator delta="1">
				<view class="line">
					<view class="cn">
						<text>小金口——番禺</text>
					</view>
					<view class="en">
						<text>Xiaojinkou Railway Station towards Panyu Railway Station</text>
					</view>
				</view>
			</navigator>
			<navigator delta="1">
				<view class="line">
					<view class="cn">
						<text>小金口——佛山西</text>
					</view>
					<view class="en">
						<text>Xiaojinkou Railway Station towards Foshanxi Railway Station</text>
					</view>
				</view>
			</navigator>
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
		<view>
			<text class="train_type" id="express">快车</text>
			<navigator delta="1">
				<view class="line">
					<view class="cn">
						<text>小金口——番禺</text>
					</view>
					<view class="en">
						<text>Xiaojinkou Railway Station towards Panyu Railway Station</text>
					</view>
				</view>
			</navigator>
			<navigator delta="1">
				<view class="line">
					<view class="cn">
						<text>小金口——佛山西</text>
					</view>
					<view class="en">
						<text>Xiaojinkou Railway Station towards Foshanxi Railway Station</text>
					</view>
				</view>
			</navigator>
			<navigator url="/pages/guangzhou-zhaoqing-intercity/express/xiaojinkou-zhaoqing" delta="1">
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
.train_type{
	display: block;
	text-align: center;
	margin: auto;
	font-size: 2rem;
}
	#local {
		color:red;
	}
	#express{
		color: green;
	}

	.line {
		margin: 50rpx auto;
		padding: 10rpx;
		width: max-content;
		color: #fff;
		background-color: #2a5aa6;
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