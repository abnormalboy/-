<template>
	<view>
		<view class="bg">
			<view class="bg-img">
			</view>
			<view class="content">
				<view class="userInfo">
					<view class="">
						<image
							src="https://upload-bbs.mihoyo.com/upload/2021/07/10/218246419/76d6cd22e1c731c31a683270cc84b439_1335455945857030866.jpg"
							mode="aspectFill" class="userInfo-img"></image>
					</view>
					<view class="">
						<view class="">
							可莉
						</view>
						<view class="">
							ID:10086
						</view>
					</view>
				</view>
				<uni-card :is-shadow="false">
					<text class="uni-body">个性签名：愿中国青年都摆脱冷气，只是向上走，能做事的做事，能发声的发声</text>
				</uni-card>
				<view class="other">
					更多
				</view>
				<view class="other">
					设置
				</view>
				<view class="other">
					关于
				</view>
			</view>
			
		</view>	
	</view>
</template>

<script>
	import {ref,computed} from 'vue'
	export default {
		setup(){
			let windowHeight = 0
			let bgimg = 'https://ts1.cn.mm.bing.net/th/id/R-C.e81d9bf16a9bc97501e68ab4342bedec?rik=JkzfJ1jsBg28eg&riu=http%3a%2f%2fwww.wenphoto.com%2fuploads%2fquestions%2f20150219%2f94cdf641d521c8969438d5c7c8eb4035.jpg&ehk=n17h1ltK3VRcvpTcOe3c1fWSVM4uC4u12p8pv2Uqdkw%3d&risl=&pid=ImgRaw&r=0'
			uni.getSystemInfo({
				success: function (res) {
					windowHeight = res.windowHeight
				}
			});
			
			console.log(bgimg)
			return {
				windowHeight:windowHeight+'px',
				bgimg:'url('+bgimg+')',
				// bgimg
			}
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.bg{
		// height: v-bind(windowHeight);
		height: calc(100vh - var(--window-bottom) - var(--window-top));
		background: #bebebe;
		position: relative;
		z-index: -3;
	}
	.bg-img {
		width: 100%;
		height: 30vh;
		background: v-bind(bgimg);
		background-size: cover;
		background-position: center;
		position: relative;
		z-index: -2;
	}

	.content {
		position: relative;
		top: -20vh;
		.userInfo {
			display: flex;
			justify-content: center;
			align-items: center;
			color: #fcfcfc;
			.userInfo-img {
				width: 160rpx;
				height: 160rpx;
				border-radius: 50%;
				margin-right: 50rpx;
			}
		}
.other{
	height: 100rpx;
	margin: 30rpx;
	color: #6a6a6a;
	padding: 10rpx;
	text-align: center;
	line-height: 100rpx;
	border-radius: 15px;
	background: #fcfcfc;
	box-shadow:  20px 20px 60px #bebebe,
	             -20px -20px 60px #ffffff;
}
	}
</style>
