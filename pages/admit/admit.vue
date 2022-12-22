<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<view class="title">Hello,<text class="userName">{{userName}}</text></view>
			<button class="commonBtn" type="primary" open-type="getPhoneNumber" @click="handleAdmit">获取授权</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userName: 'Ming',

			}
		},
		onLoad() {

		},
		methods: {
			handleAdmit() {
				uni.reLaunch({
					url: '/pages/index/index'
				})
			}
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: calc(100vh - 44px - 50px);
		gap: 50rpx 0;

		.logo {
			width: 200rpx;
			height: 200rpx;
			border-radius: 50%;
		}

		.title {
			text-align: center;
			margin: 20rpx;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}

		.commonBtn {
			height: 100rpx;
		}
	}
</style>
