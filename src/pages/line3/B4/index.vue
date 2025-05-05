<template>
	<view>
		<navigator url="/pages/station-list?line=3b4&towards=apn2pys&key1=AirportNToPanyuSquare&key2=AirportNStart"
			delta="1">
			<view class="line">
				<view class="cn">
					<text>机场北——番禺广场</text>
				</view>
				<view class="en">
					<text>Airport N. towards Panyu Square</text>
				</view>
			</view>
		</navigator>
		<navigator url="/pages/station-list?line=3b4&towards=apn2hb&key1=AirportNToHaibang&key2=HaibangStart" delta="1">
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