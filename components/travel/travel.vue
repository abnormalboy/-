<template>
	<!-- 普通组件 -->
	<view class="common-card">
		<view class="common-card-header">
			<view>
				<text class="iconfont common-card-header-icon" :class="iconfontName"></text>
				<text class="common-card-header-text">{{text}}</text>
			</view>
			<view class="common-card-header-more">
				<text>{{'更多>'}}</text>
			</view>
		</view>
		<slot></slot>
	</view>
</template>
<script>
	export default {
		name: "travel",
		onLoad(a,b){
			console.log(this)
		},
		props: {
			text: {
				type: String,
				default: ''
			},
			iconfontName: {
				type: String,
				default: 'icon-rili'
			},
		},
		data() {
			return {
				
			};
		},
	}
</script>

<style lang="scss">
	.common-card {
		padding: 0 32rpx;

		.common-card-header {
			margin-bottom: 16rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.common-card-header-icon {
				color: #333;
				margin: 0 8rpx;
			}

			.common-card-header-text {
				font-size: 32rpx;
				font-weight: bold;
			}

			.common-card-header-more {
				color: #b1968b;
				font-size: 22rpx;
			}
		}
	}
</style>
