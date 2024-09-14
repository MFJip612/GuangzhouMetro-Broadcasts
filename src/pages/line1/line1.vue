<template>
	<view>
		<navigator url="/pages/line1/xl2gzers" delta="1">
			<view class="line">
				<view class="cn">
					<text>西塱——广州东站</text>
				</view>
				<view class="en">
					<text>From Xilang towards Guangzhou East Railway Station</text>
				</view>
			</view>
		</navigator>
		<!-- <navigator url="/pages/line1/gzers2xl" delta="1">
				<view class="line">
					<view class="cn">
						<text>广州东站——西塱</text>
					</view>
					<view class="en">
						<text>From Guangzhou East Railway Station towards Xilang</text>
					</view>
				</view>
			</navigator> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	navigator {
	    width: initial;
	}
	
	.line {
	    margin: 50rpx auto;
	    padding: 10rpx;
	    width: max-content;
	    background-color: #F3D03E;
	    border-radius: 20rpx;
	    position: relative;
	    display: flex;
	    flex-direction: column;
	    justify-content: center;
	    align-items: center;
	    text-align: center;
	}
	
	.line .cn {
	    font-family: '黑体';
	    font-size: 2rem;
	}
	
	.line .en {
	    font-family: 'Arial';
	    font-size: 1.2rem;
	}
</style>