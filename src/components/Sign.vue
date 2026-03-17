<template>
	<view class="sign">
		<view class="arrow">
			<view class="left">
			</view>
		</view>
		<view class="direction">
			<view class="cn">
				<text>{{to_cn}}方向</text>
			</view>
			<view class="en">
				<text>Towards {{to_en}}</text>
			</view>
		</view>
		<view class="via" v-if="via_cn">
			<view class="via-cn">
				<text>可达{{via_cn}}</text>
			</view>
			<view class="via-en">
				<text>Via {{via_en}}</text>
			</view>
		</view>
		<view class="arrow">
			
		</view>
	</view>
</template>

<script setup>
	defineProps({
		to_cn: String,
		to_en: String,
		via_cn?: String,
		via_en?: String
	})
</script>

<style lang="scss">
.sign{
	.arrow{
		
	}
	padding: 1rpx 1rem;
	width: 50rem;
	align-items: center;
	flex-direction: column;
	background-color: #000;
	color: #fff;
	.arrow{
		height: 100%;
		font-size: 6.2rem;
	}
	.direction{
		.cn {
			font-family: '黑体';
			font-size: 3rem;
		}
		
		.en {
			font-family: 'Arial';
			font-size: 2rem;
		}
	}
	.via{
		.via-cn {
			font-family: '黑体';
			font-size: 1rem;
		}
		
		.via-en {
			font-family: 'Arial';
			font-size: .8rem;
		}
	}
}
</style>