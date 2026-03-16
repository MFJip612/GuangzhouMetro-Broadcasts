<template>
	<view>
		<navigator url="/pages/station-list-suburban?line=22&towards=fc&key1=Fangcun&key2=PanyuSquareStart" delta="1">
			<view class="line">
				<view class="cn">
					<text>番禺广场——芳村</text>
				</view>
				<view class="en">
					<text>Panyu Square towards Fangcun</text>
				</view>
			</view>
		</navigator>
		<navigator url="/pages/station-list-suburban?line=22&towards=pys&key1=PanyuSquare&key2=FangcunStart" delta="1">
			<view class="line">
				<view class="cn">
					<text>芳村——番禺广场</text>
				</view>
				<view class="en">
					<text>Fangcun towards Panyu Square</text>
				</view>
			</view>
		</navigator>
	</view>
</template>

<style lang="scss" scoped>
navigator {
	width: initial;
}

.line {
	margin: 50rpx auto;
	padding: 10rpx;
	width: max-content;
	color: #fff;
	background-color: #CD5228;
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
