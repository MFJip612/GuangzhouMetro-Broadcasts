<template>
	<view>
		<navigator
			url="/pages/station-list"
			delta="1"
			@click="prepareStationListParams({
				line: '3b4',
				towards: 'apn2pys',
				key1: 'AirportNToPanyuSquare',
				key2: 'AirportNStart'
			})">
			<view class="line">
				<view class="cn">
					<text>机场北——番禺广场</text>
				</view>
				<view class="en">
					<text>Airport N. towards Panyu Square</text>
				</view>
			</view>
		</navigator>
		<navigator
			url="/pages/station-list"
			delta="1"
			@click="prepareStationListParams({
				line: '3b4',
				towards: 'apn2hb',
				key1: 'AirportNToHaibang',
				key2: 'HaibangStart'
			})">
			<view class="line">
				<view class="cn">
					<text>机场北——海傍</text>
				</view>
				<view class="en">
					<text>Airport N. towards Haibang</text>
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
	background-color: #ECA154;
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