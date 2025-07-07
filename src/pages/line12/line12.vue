<template>
	<view>
		<navigator url="/pages/station-list?line=12&towards=ggy&key1=GuangzhouGymnasium&key2=XunfenggangStart" delta="1">
			<view class="line">
				<view class="cn">
					<text>浔峰岗——广州体育馆</text>
				</view>
				<view class="en">
					<text>Xunfenggang towards Guangzhou Gymnasium</text>
				</view>
			</view>
		</navigator>
		<navigator url="/pages/station-list?line=12&towards=hemcs&key1=HEMCS&key2=ErshaIslandStart" delta="1">
			<view class="line">
				<view class="cn">
					<text>二沙岛——大学城南</text>
				</view>
				<view class="en">
					<text>Ersha Island towards Higher Education Mega Centre S.</text>
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
	background-color: #59621D;
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
