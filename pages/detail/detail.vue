<template>
	<tagsNav :tagsList="tagsList"></tagsNav>
	<travel :text="travelOne.text" :iconfontName="travelOne.icon">
		<view class="common-list">
			<view class="common-list-item" v-for="(item,index) in travelOne.recommendList" :key="index">
				<text class="common-list-item-text">{{item.text}}</text>
			</view>
		</view>
	</travel>
	<travel :text="travelTwo.text" :iconfontName="travelTwo.icon">
		<yang-dropdown activeColor="red" :filterData="filterData" />
		<view class="travelTwo-contain">
			<view class="card-item">
				<uni-card title="芭芭拉的角色邀请" padding="6rpx" spacing="6rpx" margin="6rpx">
					<view class="card-container">
						<view class="card-main">
							<image
								src="https://uploadstatic.mihoyo.com/ys-obc/2022/12/08/12109492/f46ae9bda7a58302b9d783195b1cb6e6_3153398763611446920.png?x-oss-process=image/quality,q_75/resize,s_80"
								mode="aspectFill" class="card-main-img"></image>
						</view>
						<view class="card-other">
							<image
								src="https://uploadstatic.mihoyo.com/ys-obc/2022/12/08/12109492/6b5262720b813899154efcd78cb9b4cb_643593822088883387.png?x-oss-process=image/quality,q_75/resize,s_48"
								mode="aspectFill" class="card-other-img"></image>
							<image
								src="https://uploadstatic.mihoyo.com/ys-obc/2022/12/08/12109492/18de288e42a7a2bb3dde2a65e07cfa09_6048030204989018152.png?x-oss-process=image/quality,q_75/resize,s_48"
								mode="aspectFill" class="card-other-img"></image>
							<image
								src="https://uploadstatic.mihoyo.com/ys-obc/2022/12/08/12109492/60830f8620694afc29fae05b5f33c005_8242365553434837532.png?x-oss-process=image/quality,q_75/resize,s_48"
								mode="aspectFill" class="card-other-img"></image>
						</view>
					</view>
				</uni-card>

			</view>
			<view class="card-item">
				<uni-card title="芭芭拉的角色邀请" padding="6rpx" spacing="6rpx" margin="6rpx">
					<view class="card-container">
						<view class="card-main">
							<image
								src="https://uploadstatic.mihoyo.com/ys-obc/2022/12/08/12109492/f46ae9bda7a58302b9d783195b1cb6e6_3153398763611446920.png?x-oss-process=image/quality,q_75/resize,s_80"
								mode="aspectFill" class="card-main-img"></image>
						</view>
						<view class="card-other">
							<image
								src="https://uploadstatic.mihoyo.com/ys-obc/2022/12/08/12109492/6b5262720b813899154efcd78cb9b4cb_643593822088883387.png?x-oss-process=image/quality,q_75/resize,s_48"
								mode="aspectFill" class="card-other-img"></image>
							<image
								src="https://uploadstatic.mihoyo.com/ys-obc/2022/12/08/12109492/18de288e42a7a2bb3dde2a65e07cfa09_6048030204989018152.png?x-oss-process=image/quality,q_75/resize,s_48"
								mode="aspectFill" class="card-other-img"></image>
							<image
								src="https://uploadstatic.mihoyo.com/ys-obc/2022/12/08/12109492/60830f8620694afc29fae05b5f33c005_8242365553434837532.png?x-oss-process=image/quality,q_75/resize,s_48"
								mode="aspectFill" class="card-other-img"></image>
						</view>
					</view>
				</uni-card>

			</view>
			<view class="card-item">
				<uni-card title="芭芭拉的角色邀请" padding="6rpx" spacing="6rpx" margin="6rpx">
					<view class="card-container">
						<view class="card-main">
							<image
								src="https://uploadstatic.mihoyo.com/ys-obc/2022/12/08/12109492/f46ae9bda7a58302b9d783195b1cb6e6_3153398763611446920.png?x-oss-process=image/quality,q_75/resize,s_80"
								mode="aspectFill" class="card-main-img"></image>
						</view>
						<view class="card-other">
							<image
								src="https://uploadstatic.mihoyo.com/ys-obc/2022/12/08/12109492/6b5262720b813899154efcd78cb9b4cb_643593822088883387.png?x-oss-process=image/quality,q_75/resize,s_48"
								mode="aspectFill" class="card-other-img"></image>
							<image
								src="https://uploadstatic.mihoyo.com/ys-obc/2022/12/08/12109492/18de288e42a7a2bb3dde2a65e07cfa09_6048030204989018152.png?x-oss-process=image/quality,q_75/resize,s_48"
								mode="aspectFill" class="card-other-img"></image>
							<image
								src="https://uploadstatic.mihoyo.com/ys-obc/2022/12/08/12109492/60830f8620694afc29fae05b5f33c005_8242365553434837532.png?x-oss-process=image/quality,q_75/resize,s_48"
								mode="aspectFill" class="card-other-img"></image>
						</view>
					</view>
				</uni-card>

			</view>
			<view class="card-item">
				<uni-card title="芭芭拉的角色邀请" padding="6rpx" spacing="6rpx" margin="6rpx">
					<view class="card-container">
						<view class="card-main">
							<image
								src="https://uploadstatic.mihoyo.com/ys-obc/2022/12/08/12109492/f46ae9bda7a58302b9d783195b1cb6e6_3153398763611446920.png?x-oss-process=image/quality,q_75/resize,s_80"
								mode="aspectFill" class="card-main-img"></image>
						</view>
						<view class="card-other">
							<image
								src="https://uploadstatic.mihoyo.com/ys-obc/2022/12/08/12109492/6b5262720b813899154efcd78cb9b4cb_643593822088883387.png?x-oss-process=image/quality,q_75/resize,s_48"
								mode="aspectFill" class="card-other-img"></image>
							<image
								src="https://uploadstatic.mihoyo.com/ys-obc/2022/12/08/12109492/18de288e42a7a2bb3dde2a65e07cfa09_6048030204989018152.png?x-oss-process=image/quality,q_75/resize,s_48"
								mode="aspectFill" class="card-other-img"></image>
							<image
								src="https://uploadstatic.mihoyo.com/ys-obc/2022/12/08/12109492/60830f8620694afc29fae05b5f33c005_8242365553434837532.png?x-oss-process=image/quality,q_75/resize,s_48"
								mode="aspectFill" class="card-other-img"></image>
						</view>
					</view>
				</uni-card>

			</view>
		</view>


		<view class="">

		</view>
	</travel>
</template>

<script>
	import {
		ref
	} from 'vue'
	export default {
		setup() {
			const filterData = ref([{
					"name": '阵营',
					"key": 'first_amount',
					"select": 0,
					"submenu": [{
							"label": "阵营",
							"value": [],
						},
						{
							"label": "蒙德",
							"value": "蒙德"
						},
						{
							"label": "璃月",
							"value": "璃月"
						},
						{
							"label": "稻妻",
							"value": "稻妻"
						},
						{
							"label": "须弥",
							"value": "须弥"
						},
						{
							"label": "至冬",
							"value": "至冬"
						}
					]
				},
				{
					"name": '属性',
					"key": 'real_price',
					"select": 0,
					"submenu": [{
							"label": "属性",
							"value": [],
						},
						{
							"label": "风元素",
							"value": "风元素",
						},
						{
							"label": "火元素",
							"value": "火元素",
						},
						{
							"label": "水元素",
							"value": "水元素",
						},
						{
							"label": "冰元素",
							"value": "冰元素",
						},
						{
							"label": "雷元素",
							"value": "雷元素",
						},
						{
							"label": "岩元素",
							"value": "岩元素",
						},
						{
							"label": "草元素",
							"value": "草元素",
						},
					]
				},
				{
					"name": '武器类型',
					"key": 'power',
					"select": 0,
					"submenu": [{
							"label": "武器类型",
							"value": '',
						}, {
							"label": "双手剑",
							"value": "双手剑"
						}, {
							"label": "单手剑",
							"value": "单手剑",
						},
						{
							"label": "弓",
							"value": "弓",
						},
						{
							"label": "法器",
							"value": "法器",
						},
						{
							"label": "长柄武器",
							"value": "长柄武器",
						}
					]
				}
			])
			const handChange = (e) => {
				e.forEach(el => {
					queryForm.value[el.labelKey] = el.value
				})
				onRefresh() //  重新请求后台接口刷新列表
			}
			return {
				filterData
			}
		},
		data() {
			return {
				tagsList: [{
						picText: '卡牌资料',
						picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2022/12/07/195563531/32fc9ab4261969c6d41bf5b9cac80547_5475840492938819888.png?x-oss-process=image/quality,q_75/resize,s_96',
					},

					{
						picText: '玩法攻略',
						picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2022/12/07/195563531/2e729fffd010f961a462b2b978caa005_2997124018978826319.png?x-oss-process=image/quality,q_75/resize,s_96',
					},
					{
						picText: '卡牌广场',
						picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2022/12/12/195563531/a51eeac3c7ba327efddd79c11fb49fb5_3582813142440443696.png?x-oss-process=image/quality,q_75/resize,s_96',
					},
					{
						picText: '攻略站',
						picUrl: 'https://uploadstatic.mihoyo.com/ys-obc/2022/02/10/283462834/138352aa4de76d185e4f973f2b4c88ed_8946163745863136807.png?x-oss-process=image/quality,q_75/resize,s_96',
					},
				],
				travelOne: {
					text: '热门推荐',
					icon: 'icon-kapai',
					recommendList: [{
							text: '基础规则介绍'
						},
						{
							text: '小技巧＆手柄技巧'
						},
						{
							text: '强力卡组推荐'
						},
						{
							text: '魔偶剑鬼的酒馆挑战攻略'
						},
						{
							text: '讨债人酒馆挑战攻略'
						},
						{
							text: '岩盔王酒馆挑战攻略'
						},
						{
							text: '8张优质卡任君选择！'
						},
						{
							text: '无手牌通关酒馆挑战'
						},
					],
				},
				travelTwo: {
					text: '卡组攻略',
					icon: 'icon-kapai',
					model: {
						zhenying: '',
						shuxing: '',
						武器类型: '',
					}
				},
			}
		},
	}
</script>

<style lang="scss">
	.common-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		.common-list-item {
			width: 45%;
			font-size: 28rpx;
			margin: 0 22rpx 24rpx 0;
			color: #333;
			background-color: rgba(219, 219, 219, 0.3);
			padding: 8rpx 32rpx 8rpx 30rpx;
			box-sizing: border-box;
			border-radius: 6rpx;
			text-align: center;

			.common-list-item-text {
				display: block;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
	}



	.travelTwo-contain {
		display: flex;
		flex-wrap: wrap;
justify-content: space-around;
.card-item{
	width: 48%;
}
		.card-container {
			display: flex;

			.card-main {
				.card-main-img {
					width: 68rpx;
					height: 68rpx;
				}
			}

			.card-other {
				width: 212rpx;
				height: 68rpx;
				padding-left: 54rpx;
				background: url(https://bbs.mihoyo.com/ys/strategy/_nuxt/img/3739438.png);
				background-size: cover;
				display: flex;
				align-items: center;

				.card-other-img {
					width: 44rpx;
					height: 44rpx;
				}
			}
		}
	}
</style>
