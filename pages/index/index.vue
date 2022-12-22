<template>
	<view>
		<!-- 轮播图 -->
		<view class="swiper-container">
			<swiper indicator-dots>
				<swiper-item>
					<view class="pic-container">
						<image class="swiper-pic"
							src="https://uploadstatic.mihoyo.com/ys-obc/2020/11/02/75276545/a33d0c09c136c8a978491a9ff146d38e_3125840830904527715.jpg?x-oss-process=image/quality,q_75/resize,s_210"
							mode="aspectFit"></image>
					</view>

				</swiper-item>
				<swiper-item>
					<view class="pic-container">
						<image class="swiper-pic"
							src="https://uploadstatic.mihoyo.com/ys-obc/2022/12/07/75379475/53b0b12a2cc9d74f20ded5f30b449a17_7973918343599330660.jpg?x-oss-process=image/quality,q_75/resize,s_210"
							mode="aspectFit"></image>
					</view>

				</swiper-item>
				<swiper-item>
					<view class="pic-container">
						<image class="swiper-pic"
							src="https://uploadstatic.mihoyo.com/ys-obc/2022/11/29/75379475/26649414eeabe79d3a77d15b6e419570_960614632910729792.jpg?x-oss-process=image/quality,q_75/resize,s_210"
							mode="aspectFit"></image>
					</view>

				</swiper-item>
			</swiper>
		</view>
		<!-- 导航tags -->
		<tagsNav :tagsList="tagsList"></tagsNav>
		<travel :text="calendarHeader.text" :iconfontName="calendarHeader.icon">
			<view class="calendar-container">
				<view class="week">
					<view class="week-item" v-for="(item,index) in calendarList" :key="index" @click="handlerWeekShow(index)" :class="{'week-active':isShowWeek==index}">
						<view class="week-item-content">
							{{item.weekData}}
						</view>
						<view class="week-item-day">
							{{item.day}}
						</view>
					</view>
				</view>
				<view class="content-one">
					<view class="content-one-text">
						<text>天赋培养</text>
					</view>
					<view class="content-one-pic" v-for="(item,index) in calendarList[0].tianfu.picList" :key="index">
						<image :src="item.picUrl" mode="aspectFit"></image>
					</view>
					<view class="content-one-more">
						更多
					</view>
				</view>
				<view class="content-one">
					<view class="content-one-text">
						<text>武器突破</text>
					</view>
					<view class="content-one-pic" v-for="(item,index) in calendarList[0].wuqi.picList" :key="index">
						<image :src="item.picUrl" mode="aspectFit"></image>
					</view>
					<view class="content-one-more">
						更多
					</view>
				</view>
			</view>
		</travel>
		<travel :text="trickData.header.text" :iconfontName="trickData.header.icon">
			<view class="activities-container">
				<view class="activities-nav">
					<view class="activities-nav-item" :class="{active:isShow==1}">
						<text @click="handlerShow(1)">近期活动</text>
					</view>
					<view class="activities-nav-item" :class="{active:isShow==2}">
						<text @click="handlerShow(2)">活动攻略</text>
					</view>
				</view>
				<view class="content" v-for="(item,index) in trickData.contentList" :key="index" v-if="isShow==1">
					<view class="content-left">
						<image class="content-left-image" :src="item.picUrl" mode="aspectFill"></image>
					</view>
					<view class="content-right">
						<view class="content-right-title">
							{{item.title}}
						</view>
						<view class="content-right-text">
							{{item.text}}
						</view>
					</view>
				</view>
				<view class="content" v-for="(item,index) in trickData.contentList2" :key="index" v-if="isShow==2">
					<view class="content-left">
						<image class="content-left-image" :src="item.picUrl" mode="aspectFill"></image>
					</view>
					<view class="content-right">
						<view class="content-right-title">
							{{item.title}}
						</view>
						<view class="content-right-text">
							{{item.text}}
						</view>
					</view>
				</view>
			</view>
		</travel>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow:1,
				isShowWeek:0,
				tagsList: [{
						picText: '地图工具',
						picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2022/02/10/283462834/e51c4bed5c1b79ed08ff012c38e7ad90_5949001482616031152.png?x-oss-process=image/quality,q_75/resize,s_96',
					},
					{
						picText: '攻略站',
						picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2022/02/10/283462834/138352aa4de76d185e4f973f2b4c88ed_8946163745863136807.png?x-oss-process=image/quality,q_75/resize,s_96',
					},
					{
						picText: '攻略合集',
						picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2022/12/07/283462834/d9b37780f09c9a93aae7b794664b7362_5181463533678109049.png?x-oss-process=image/quality,q_75/resize,s_96',
					},
					{
						picText: '角色图鉴',
						picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2021/06/07/75276545/da087c70d5ce5e95ab353896cde77186_732830328053361739.png?x-oss-process=image/quality,q_75/resize,s_96',
					},
					{
						picText: '七圣召唤',
						picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2022/12/08/195563531/acc840c763958c4563aa965186489d61_6559444390429464629.png?x-oss-process=image/quality,q_75/resize,s_96',
					},
					{
						picText: '卡牌资料',
						picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2022/12/07/195563531/32fc9ab4261969c6d41bf5b9cac80547_4694261058977903584.png?x-oss-process=image/quality,q_75/resize,s_96',
					},
					{
						picText: '武器图鉴',
						picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2021/06/07/75276545/5b66dea03fe089075c3d95573ab07047_2781055864473387780.png?x-oss-process=image/quality,q_75/resize,s_96',
					},
					{
						picText: '更多',
						picUrl: 'data:image/png;base64,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',
					},
				],
				calendarList: [{
						weekData: '一',
						day: '12',
						tianfu: {
							type: '天赋培养',
							picList: [{
									name: "纳西妲",
									picUrl: "https://uploadstatic.mihoyo.com/ys-obc/2022/10/24/4328207/f9f8f331dea3cc4920037df2018437d0_4958876478140111847.png?x-oss-process=image/quality,q_75/resize,s_80"
								},
								{
									name: "绫人",
									picUrl: "https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/d16fbf95d62771daa65ab5d04f6abbd5_5682396699474055.png?x-oss-process=image/quality,q_75/resize,s_80"
								},
								{
									name: "一斗",
									picUrl: "https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/baf328a93ae579848391513c40df1ee0_8021041769727469540.png?x-oss-process=image/quality,q_75/resize,s_80"
								},
								{
									name: "椰羊",
									picUrl: "https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/e5411d80d0cd1b20d32e65565fed4b88_417824432506361738.png?x-oss-process=image/quality,q_75/resize,s_80"
								},
								{
									name: "神里凌华",
									picUrl: "https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/74d14ff2bfdb9961758d0b83097ab64c_6898495248687804760.png?x-oss-process=image/quality,q_75/resize,s_80"
								},
							]
						},
						wuqi: {
							type: '武器突破',
							picList: [{
									name: '千夜浮梦',
									picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2022/11/02/75379475/60870c22a0d1ff96a0792feb31c1730d_6839645666076061598.png?x-oss-process=image/quality,q_75/resize,s_80'
								},
								{
									name: '赤沙之杖',
									picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2022/09/28/75379475/f7682f2e56bac53677d72682997fbc80_6397617510500929561.png?x-oss-process=image/quality,q_75/resize,s_80'
								},
								{
									name: '波乱月白经津',
									picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2022/03/30/75379475/701a280faac70deea9bd5b02e5012d0c_3701792405841741110.png?x-oss-process=image/quality,q_75/resize,s_80'
								},
								{
									name: '飞雷之弦振',
									picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2021/08/10/75379475/e4dc68e7ec02477aaadf8e75a36d7073_8523784089888669451.png?x-oss-process=image/quality,q_75/resize,s_80'
								},
								{
									name: '赤角石溃杵',
									picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2021/12/14/75379475/260442fca96f0e65701ff5067b13bb60_6053712857932776206.png?x-oss-process=image/quality,q_75/resize,s_80'
								},

							]
						}
					},
					{
						weekData: '二',
						day: '13',
						tianfu: {
							type: '天赋培养',
							picList: [{
									name: "纳西妲",
									picUrl: "https://uploadstatic.mihoyo.com/ys-obc/2022/10/24/4328207/f9f8f331dea3cc4920037df2018437d0_4958876478140111847.png?x-oss-process=image/quality,q_75/resize,s_80"
								},
								{
									name: "绫人",
									picUrl: "https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/d16fbf95d62771daa65ab5d04f6abbd5_5682396699474055.png?x-oss-process=image/quality,q_75/resize,s_80"
								},
								{
									name: "一斗",
									picUrl: "https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/baf328a93ae579848391513c40df1ee0_8021041769727469540.png?x-oss-process=image/quality,q_75/resize,s_80"
								},
								{
									name: "椰羊",
									picUrl: "https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/e5411d80d0cd1b20d32e65565fed4b88_417824432506361738.png?x-oss-process=image/quality,q_75/resize,s_80"
								},
								{
									name: "神里凌华",
									picUrl: "https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/74d14ff2bfdb9961758d0b83097ab64c_6898495248687804760.png?x-oss-process=image/quality,q_75/resize,s_80"
								},
							]
						},
						wuqi: {
							type: '武器突破',
							picList: [{
									name: '千夜浮梦',
									picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2022/11/02/75379475/60870c22a0d1ff96a0792feb31c1730d_6839645666076061598.png?x-oss-process=image/quality,q_75/resize,s_80'
								},
								{
									name: '赤沙之杖',
									picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2022/09/28/75379475/f7682f2e56bac53677d72682997fbc80_6397617510500929561.png?x-oss-process=image/quality,q_75/resize,s_80'
								},
								{
									name: '波乱月白经津',
									picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2022/03/30/75379475/701a280faac70deea9bd5b02e5012d0c_3701792405841741110.png?x-oss-process=image/quality,q_75/resize,s_80'
								},
								{
									name: '飞雷之弦振',
									picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2021/08/10/75379475/e4dc68e7ec02477aaadf8e75a36d7073_8523784089888669451.png?x-oss-process=image/quality,q_75/resize,s_80'
								},
								{
									name: '赤角石溃杵',
									picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2021/12/14/75379475/260442fca96f0e65701ff5067b13bb60_6053712857932776206.png?x-oss-process=image/quality,q_75/resize,s_80'
								},

							]
						}
					},
					{
						weekData: '三',
						day: '14',
						tianfu: {
							type: '天赋培养',
							picList: [{
									name: "纳西妲",
									picUrl: "https://uploadstatic.mihoyo.com/ys-obc/2022/10/24/4328207/f9f8f331dea3cc4920037df2018437d0_4958876478140111847.png?x-oss-process=image/quality,q_75/resize,s_80"
								},
								{
									name: "绫人",
									picUrl: "https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/d16fbf95d62771daa65ab5d04f6abbd5_5682396699474055.png?x-oss-process=image/quality,q_75/resize,s_80"
								},
								{
									name: "一斗",
									picUrl: "https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/baf328a93ae579848391513c40df1ee0_8021041769727469540.png?x-oss-process=image/quality,q_75/resize,s_80"
								},
								{
									name: "椰羊",
									picUrl: "https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/e5411d80d0cd1b20d32e65565fed4b88_417824432506361738.png?x-oss-process=image/quality,q_75/resize,s_80"
								},
								{
									name: "神里凌华",
									picUrl: "https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/74d14ff2bfdb9961758d0b83097ab64c_6898495248687804760.png?x-oss-process=image/quality,q_75/resize,s_80"
								},
							]
						},
						wuqi: {
							type: '武器突破',
							picList: [{
									name: '千夜浮梦',
									picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2022/11/02/75379475/60870c22a0d1ff96a0792feb31c1730d_6839645666076061598.png?x-oss-process=image/quality,q_75/resize,s_80'
								},
								{
									name: '赤沙之杖',
									picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2022/09/28/75379475/f7682f2e56bac53677d72682997fbc80_6397617510500929561.png?x-oss-process=image/quality,q_75/resize,s_80'
								},
								{
									name: '波乱月白经津',
									picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2022/03/30/75379475/701a280faac70deea9bd5b02e5012d0c_3701792405841741110.png?x-oss-process=image/quality,q_75/resize,s_80'
								},
								{
									name: '飞雷之弦振',
									picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2021/08/10/75379475/e4dc68e7ec02477aaadf8e75a36d7073_8523784089888669451.png?x-oss-process=image/quality,q_75/resize,s_80'
								},
								{
									name: '赤角石溃杵',
									picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2021/12/14/75379475/260442fca96f0e65701ff5067b13bb60_6053712857932776206.png?x-oss-process=image/quality,q_75/resize,s_80'
								},

							]
						}
					},
					{
						weekData: '四',
						day: '15',
						tianfu: {
							type: '天赋培养',
							picList: [{
									name: "纳西妲",
									picUrl: "https://uploadstatic.mihoyo.com/ys-obc/2022/10/24/4328207/f9f8f331dea3cc4920037df2018437d0_4958876478140111847.png?x-oss-process=image/quality,q_75/resize,s_80"
								},
								{
									name: "绫人",
									picUrl: "https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/d16fbf95d62771daa65ab5d04f6abbd5_5682396699474055.png?x-oss-process=image/quality,q_75/resize,s_80"
								},
								{
									name: "一斗",
									picUrl: "https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/baf328a93ae579848391513c40df1ee0_8021041769727469540.png?x-oss-process=image/quality,q_75/resize,s_80"
								},
								{
									name: "椰羊",
									picUrl: "https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/e5411d80d0cd1b20d32e65565fed4b88_417824432506361738.png?x-oss-process=image/quality,q_75/resize,s_80"
								},
								{
									name: "神里凌华",
									picUrl: "https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/74d14ff2bfdb9961758d0b83097ab64c_6898495248687804760.png?x-oss-process=image/quality,q_75/resize,s_80"
								},
							]
						},
						wuqi: {
							type: '武器突破',
							picList: [{
									name: '千夜浮梦',
									picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2022/11/02/75379475/60870c22a0d1ff96a0792feb31c1730d_6839645666076061598.png?x-oss-process=image/quality,q_75/resize,s_80'
								},
								{
									name: '赤沙之杖',
									picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2022/09/28/75379475/f7682f2e56bac53677d72682997fbc80_6397617510500929561.png?x-oss-process=image/quality,q_75/resize,s_80'
								},
								{
									name: '波乱月白经津',
									picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2022/03/30/75379475/701a280faac70deea9bd5b02e5012d0c_3701792405841741110.png?x-oss-process=image/quality,q_75/resize,s_80'
								},
								{
									name: '飞雷之弦振',
									picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2021/08/10/75379475/e4dc68e7ec02477aaadf8e75a36d7073_8523784089888669451.png?x-oss-process=image/quality,q_75/resize,s_80'
								},
								{
									name: '赤角石溃杵',
									picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2021/12/14/75379475/260442fca96f0e65701ff5067b13bb60_6053712857932776206.png?x-oss-process=image/quality,q_75/resize,s_80'
								},

							]
						}
					},
					{
						weekData: '五',
						day: '16',
						tianfu: {
							type: '天赋培养',
							picList: [{
									name: "纳西妲",
									picUrl: "https://uploadstatic.mihoyo.com/ys-obc/2022/10/24/4328207/f9f8f331dea3cc4920037df2018437d0_4958876478140111847.png?x-oss-process=image/quality,q_75/resize,s_80"
								},
								{
									name: "绫人",
									picUrl: "https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/d16fbf95d62771daa65ab5d04f6abbd5_5682396699474055.png?x-oss-process=image/quality,q_75/resize,s_80"
								},
								{
									name: "一斗",
									picUrl: "https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/baf328a93ae579848391513c40df1ee0_8021041769727469540.png?x-oss-process=image/quality,q_75/resize,s_80"
								},
								{
									name: "椰羊",
									picUrl: "https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/e5411d80d0cd1b20d32e65565fed4b88_417824432506361738.png?x-oss-process=image/quality,q_75/resize,s_80"
								},
								{
									name: "神里凌华",
									picUrl: "https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/74d14ff2bfdb9961758d0b83097ab64c_6898495248687804760.png?x-oss-process=image/quality,q_75/resize,s_80"
								},
							]
						},
						wuqi: {
							type: '武器突破',
							picList: [{
									name: '千夜浮梦',
									picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2022/11/02/75379475/60870c22a0d1ff96a0792feb31c1730d_6839645666076061598.png?x-oss-process=image/quality,q_75/resize,s_80'
								},
								{
									name: '赤沙之杖',
									picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2022/09/28/75379475/f7682f2e56bac53677d72682997fbc80_6397617510500929561.png?x-oss-process=image/quality,q_75/resize,s_80'
								},
								{
									name: '波乱月白经津',
									picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2022/03/30/75379475/701a280faac70deea9bd5b02e5012d0c_3701792405841741110.png?x-oss-process=image/quality,q_75/resize,s_80'
								},
								{
									name: '飞雷之弦振',
									picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2021/08/10/75379475/e4dc68e7ec02477aaadf8e75a36d7073_8523784089888669451.png?x-oss-process=image/quality,q_75/resize,s_80'
								},
								{
									name: '赤角石溃杵',
									picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2021/12/14/75379475/260442fca96f0e65701ff5067b13bb60_6053712857932776206.png?x-oss-process=image/quality,q_75/resize,s_80'
								},

							]
						}
					},
					{
						weekData: '六',
						day: '17',
						tianfu: {
							type: '天赋培养',
							picList: [{
									name: "纳西妲",
									picUrl: "https://uploadstatic.mihoyo.com/ys-obc/2022/10/24/4328207/f9f8f331dea3cc4920037df2018437d0_4958876478140111847.png?x-oss-process=image/quality,q_75/resize,s_80"
								},
								{
									name: "绫人",
									picUrl: "https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/d16fbf95d62771daa65ab5d04f6abbd5_5682396699474055.png?x-oss-process=image/quality,q_75/resize,s_80"
								},
								{
									name: "一斗",
									picUrl: "https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/baf328a93ae579848391513c40df1ee0_8021041769727469540.png?x-oss-process=image/quality,q_75/resize,s_80"
								},
								{
									name: "椰羊",
									picUrl: "https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/e5411d80d0cd1b20d32e65565fed4b88_417824432506361738.png?x-oss-process=image/quality,q_75/resize,s_80"
								},
								{
									name: "神里凌华",
									picUrl: "https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/74d14ff2bfdb9961758d0b83097ab64c_6898495248687804760.png?x-oss-process=image/quality,q_75/resize,s_80"
								},
							]
						},
						wuqi: {
							type: '武器突破',
							picList: [{
									name: '千夜浮梦',
									picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2022/11/02/75379475/60870c22a0d1ff96a0792feb31c1730d_6839645666076061598.png?x-oss-process=image/quality,q_75/resize,s_80'
								},
								{
									name: '赤沙之杖',
									picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2022/09/28/75379475/f7682f2e56bac53677d72682997fbc80_6397617510500929561.png?x-oss-process=image/quality,q_75/resize,s_80'
								},
								{
									name: '波乱月白经津',
									picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2022/03/30/75379475/701a280faac70deea9bd5b02e5012d0c_3701792405841741110.png?x-oss-process=image/quality,q_75/resize,s_80'
								},
								{
									name: '飞雷之弦振',
									picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2021/08/10/75379475/e4dc68e7ec02477aaadf8e75a36d7073_8523784089888669451.png?x-oss-process=image/quality,q_75/resize,s_80'
								},
								{
									name: '赤角石溃杵',
									picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2021/12/14/75379475/260442fca96f0e65701ff5067b13bb60_6053712857932776206.png?x-oss-process=image/quality,q_75/resize,s_80'
								},

							]
						}
					},
					{
							weekData: '日',
							day: '18',
							tianfu: {
								type: '天赋培养',
								picList: [{
										name: "纳西妲",
										picUrl: "https://uploadstatic.mihoyo.com/ys-obc/2022/10/24/4328207/f9f8f331dea3cc4920037df2018437d0_4958876478140111847.png?x-oss-process=image/quality,q_75/resize,s_80"
									},
									{
										name: "绫人",
										picUrl: "https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/d16fbf95d62771daa65ab5d04f6abbd5_5682396699474055.png?x-oss-process=image/quality,q_75/resize,s_80"
									},
									{
										name: "一斗",
										picUrl: "https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/baf328a93ae579848391513c40df1ee0_8021041769727469540.png?x-oss-process=image/quality,q_75/resize,s_80"
									},
									{
										name: "椰羊",
										picUrl: "https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/e5411d80d0cd1b20d32e65565fed4b88_417824432506361738.png?x-oss-process=image/quality,q_75/resize,s_80"
									},
									{
										name: "神里凌华",
										picUrl: "https://uploadstatic.mihoyo.com/ys-obc/2022/08/15/75379475/74d14ff2bfdb9961758d0b83097ab64c_6898495248687804760.png?x-oss-process=image/quality,q_75/resize,s_80"
									},
								]
							},
							wuqi: {
								type: '武器突破',
								picList: [{
										name: '千夜浮梦',
										picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2022/11/02/75379475/60870c22a0d1ff96a0792feb31c1730d_6839645666076061598.png?x-oss-process=image/quality,q_75/resize,s_80'
									},
									{
										name: '赤沙之杖',
										picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2022/09/28/75379475/f7682f2e56bac53677d72682997fbc80_6397617510500929561.png?x-oss-process=image/quality,q_75/resize,s_80'
									},
									{
										name: '波乱月白经津',
										picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2022/03/30/75379475/701a280faac70deea9bd5b02e5012d0c_3701792405841741110.png?x-oss-process=image/quality,q_75/resize,s_80'
									},
									{
										name: '飞雷之弦振',
										picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2021/08/10/75379475/e4dc68e7ec02477aaadf8e75a36d7073_8523784089888669451.png?x-oss-process=image/quality,q_75/resize,s_80'
									},
									{
										name: '赤角石溃杵',
										picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2021/12/14/75379475/260442fca96f0e65701ff5067b13bb60_6053712857932776206.png?x-oss-process=image/quality,q_75/resize,s_80'
									},
					
								]
							}
						}
					
				],
				calendarHeader: {
					text: '日历',
					icon: 'icon-rili'
				},
				trickData: {
					header: {
						text: '热点追踪',
						icon: 'icon-zuobiao'
					},
					contentList: [{
						title: '「秋津森夜试胆会」活动',
						text: '「秋津森夜试胆会」活动',
						picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2022/12/15/195563531/9daeaea7371fc3a075604c3360c2c75d_3846570542566723001.png?x-oss-process=image/quality,q_75/resize,s_80'
					}],
					contentList2: [{
							title: '【秋津森夜试胆会】第一阶段活动速通（视频）',
							text: '【秋津森夜试胆会】第一阶段活动速通（视频）',
							picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2022/12/15/75379475/3f2ab6e9f93733db91cb482eda22f24b_3386300911965862595.png?x-oss-process=image/quality,q_75/resize,s_80'
						},
						{
							title: '【迷城战线·沙域篇】弥蔓、刚劲、决意试炼速通',
							text: '【迷城战线·沙域篇】弥蔓、刚劲、决意试炼速通',
							picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2022/12/13/75379475/1a202d330e7ee438b39393c11b3600b9_3063260875061756034.png?x-oss-process=image/quality,q_75/resize,s_80'
						},
						{
							title: '【迷城战线·沙域篇】鏖战试炼、蒸腾试炼快速拿满奖励',
							text: '【迷城战线·沙域篇】鏖战试炼、蒸腾试炼快速拿满奖励',
							picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2022/12/12/75379475/5380c397e4b948760878e8f4371444f9_1881459003270075630.png?x-oss-process=image/quality,q_75/resize,s_80'
						},
					]
				}
			}
		},
		methods:{
			handlerShow(index){
				this.isShow = index
				console.log(index)
			},
			handlerWeekShow(index){
				this.isShowWeek = index
				console.log(index)
			}
		}
	}
</script>

<style lang="scss">
	.swiper-container {
		.pic-container {
			display: flex;
			align-items: center;
			height: 100%;
		}

		.swiper-pic {
			width: 100%;
		}
	}

	.nav-tabs {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		padding: 0 32rpx;

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

	.calendar-container {
		border: 1rpx solid #f7f7f7;
		box-sizing: border-box;
		margin-bottom: 40rpx;

		.content-one+.content-one {
			border-top: 1rpx solid #f7f7f7;
		}

		.week {
			display: flex;

			.week-active {
				background: #ffffff !important;
				border: 0 1rpx solod #f5f5f5;
				border-top: 5rpx solid #b59b8f;
				flex-grow: 1;
			}

			.week-item {
				display: flex;
				flex-direction: column;
				justify-content: center;
				width: 90rpx;
				height: 120rpx;
				background-color: #f5f5f5;
				margin: 0 1rpx;

				.week-item-content,
				.week-item-day {
					text-align: center;
					color: #a6a6a6;
					font-size: 22rpx;
					margin-bottom: 4rpx;
				}

				.week-item-day {
					color: #b59b90;
					font-weight: bold;
					font-size: 34rpx;
				}
			}
		}

		.content-one {
			display: flex;
			justify-content: space-between;
			padding: 32rpx 0;
			margin: 0 16rpx;

			.content-one-text {
				width: 50rpx;
				height: 80rpx;
				font-size: 24rpx;
				color: #737373;
				margin-top: 6rpx;
				border-radius: 6rpx;
			}

			.content-one-pic {
				width: 80rpx;
				height: 80rpx;

				image {
					width: 100%;
					height: 100%;
				}

				border-radius: 6rpx;
				overflow: hidden;
			}

			.content-one-more {
				width: 80rpx;
				height: 80rpx;
				font-size: 22rpx;
				color: #a6a6a6;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 6rpx;
				background: #f5f5f5;
			}
		}
	}

	.activities-container {
		.activities-nav {
			display: flex;
			margin-bottom: 20rpx;

			.activities-nav-item {
				margin: 0 20rpx;
				color: #b59b90;
				font-size: 28rpx;

			}

			.active {
				border-bottom: #bbb solid 2rpx;
			}
		}

		.content {
			background-color: #f5f5f5;
			padding: 10rpx;
			border-radius: 5rpx;
			display: flex;
			margin-bottom: 20rpx;
			.content-left {
				margin: 10rpx;

				.content-left-image {
					width: 80rpx;
					height: 80rpx;
					border-radius: 5rpx;
				}
			}

			.content-right {
				display: flex;
				flex-direction: column;
				justify-content: center;
				padding: 6rpx;

				.content-right-title {
					font-size: 28rpx;
					overflow:hidden;
					text-overflow:ellipsis;
					white-space:nowrap;
					width: 500rpx;
				}

				.content-right-text {
					font-size: 24rpx;
					color: #a6a6a6;
				}
			}
		}
	}
</style>
