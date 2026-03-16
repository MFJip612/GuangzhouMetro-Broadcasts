<template>
	<view>
		<navigator
			url="/pages/station-list"
			delta="1"
			@click="prepareStationListParams({
				line: '10',
				towards: 'yje',
				key1: 'YangjiEast',
				key2: 'XilangStart'
			})">
			<view class="line">
				<view class="cn">
					<text>西塱——杨箕东</text>
				</view>
				<view class="en">
					<text>Xilang towards Yangji East</text>
				</view>
			</view>
		</navigator>
		<navigator
			url="/pages/station-list"
			delta="1"
			@click="prepareStationListParams({
				line: '10',
				towards: 'xl',
				key1: 'Xilang',
				key2: 'YangjiEastStart'
			})">
			<view class="line">
				<view class="cn">
					<text>杨箕东——西塱</text>
				</view>
				<view class="en">
					<text>Yangji East towards Xilang</text>
				</view>
			</view>
		</navigator>
	</view>
	<!-- <Sign to_cn="南沙客运港" to_en="Nansha Passenger Port" via_cn="大学城南" via_en="Higher Education Mega Centre S."/> -->
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
		background-color: #7D9CC0;
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