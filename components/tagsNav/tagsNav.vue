<template>
	<view class="nav-tabs">
		<view class="nav-tabs-item" v-for="(item,index) in tagsList" :key="index" @click="toOtherPage(item.picText)">
			<image class="nav-tabs-item-pic" :src="item.picUrl" mode=""></image>
			<text class="nav-tabs-item-text">{{item.picText}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "tagsNav",
		setup(){
			function toOtherPage(val){
				if (val=='七圣召唤'){
					uni.switchTab({
						url:'/pages/detail/detail'
					})
				}
			}
			return {
				toOtherPage
			}
			
		},
		props:{
			tagsList:{
				type:Array,
				default:[]
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.nav-tabs {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		padding: 0 32rpx;
		margin-bottom: 40rpx;
		.nav-tabs-item {
			display: flex;
			flex-direction: column;
			margin: 24rpx 30rpx;

			.nav-tabs-item-pic {
				height: 100rpx;
				width: 100rpx;
			}

			.nav-tabs-item-text {
				text-align: center;
				color: #333;
				font-size: 26rpx;
			}
		}

	}
</style>
