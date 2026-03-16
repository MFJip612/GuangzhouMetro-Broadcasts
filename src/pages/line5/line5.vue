<template>
	<view>
		<navigator
			url="/pages/station-list"
			delta="1"
			@click="prepareStationListParams({
				line: '5',
				towards: 'hpxg',
				key1: 'HuangpuNewPort',
				key2: 'JiaokouStart'
			})">
			<view class="line">
				<view class="cn">
					<text>滘口——黄埔新港</text>
				</view>
				<view class="en">
					<text>Jiaokou towards Huangpu New Port</text>
				</view>
			</view>
		</navigator>
	</view>
</template>

<script setup>
import { setPagePostParams } from '@/utils/page-post-params';

const prepareStationListParams = (params) => {
	// 跳转前暂存参数，目标页按 POST 方式读取。
	setPagePostParams('/pages/station-list', params);
};
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
	background-color: #C5003E;
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
