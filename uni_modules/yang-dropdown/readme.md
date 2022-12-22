# yang-dropdown

> 在template中使用组件

```
<yang-dropdown activeColor="red"  :filterData="filterData" @change="handChange" />
```

> 在script引用组件

```
<script setup>
	import {
		ref
	} from 'vue'
	const filterData = ref([{
		"name": '首付金额',
		"key": 'first_amount',
		"select": 0,
		"submenu": [{
			"label": "首付金额",
			"value": [],
		}, {
			"label": "0首付",
			"value": [0, 0]
		}, {
			"label": "0-5000元",
			"value": [0, 4999]
		}, {
			"label": "5000-10000元",
			"value": [5000, 10000]
		}, {
			"label": "10000以上",
			"value": [10000, '']
		}]
	}, {
		"name": '车价',
		"key": 'real_price',
		"select": 0,
		"submenu": [{
			"label": "车价",
			"value": [],
		}, {
			"label": "10万以内",
			"value": [0, 99999],
		}, {
			"label": "10-15万",
			"value": [100000, 149999],
		}, {
			"label": "15万以上",
			"value": [150000, ''],
		}]
	}, {
		"name": '动力',
		"key": 'power',
		"select": 0,
		"submenu": [{
			"label": "动力",
			"value": '',
		}, {
			"label": "纯电",
			"value": "纯电"
		}, {
			"label": "插电混动",
			"value": '插电混动',
		}]
	}])
	const handChange = (e) => {
		e.forEach(el => {
			queryForm.value[el.labelKey] = el.value
		})
		onRefresh()	//	重新请求后台接口刷新列表
	}
</script>
```

> paging 属性说明

| 属性名		| 类型		|  默认值	|  详细说明			|
| --------		| -----:	| :----:	| ------			|
| filterData	| Array		|   []		|  需要展示的数据	|
| maxHeight		| Number	|   500		|  选择区域最大高度	|
| tabsHeight	| Number	|   80		|  组件高度			|
| isSticky		| Boolean	|   true	|  是否吸顶			|
| stickyTop		| String	|   '0'		|  吸顶距离顶部高度	|
| bgColor		| String	|   #fff	|  tabs背景颜色		|
| mainBgColor	| String	|   #fff	|  选择区域背景颜色	|
| activeColor	| String	|   #4EC65E	|  选中字体颜色		|
| color			| String	|   #333	|  字体默认颜色		|

> 事件说明

| 事件名	|   说明		|
| --------	|  ------		|
| @change	|   选中的数据	|


### End