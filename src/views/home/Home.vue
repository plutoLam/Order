<template>
	<div class="home">
		<home-info></home-info>
		<home-recommend :recommend="recommend"></home-recommend>
		<goods-list :category="category" :goods="goods"></goods-list>
		<home-tabbar @showCart="showCart()"></home-tabbar>

		<van-overlay :show="show" @click.self="show = false" z-index="1" duration="0.1">
			<home-cart-list></home-cart-list>
		</van-overlay>
	</div>
</template>

<script>
	import GoodsList from './childComps/GoodsList.vue'
	import HomeInfo from './childComps/HomeInfo.vue'
	import HomeRecommend from './childComps/HomeRecommend.vue'
	import HomeTabbar from './childComps/HomeTabbar.vue'
	import HomeCartList from './childComps/HomeCartList.vue'
	import { getRecommend, getGoods, getCategory } from '@/network/home.js'
	import { Overlay } from 'vant';
	export default {
		name: 'Home',
		components: {
			GoodsList,
			HomeInfo,
			HomeRecommend,
			HomeTabbar,
			HomeCartList,
			[Overlay.name]: Overlay
		},
		data() {
			return {
				recommend: [],
				category: [],
				goods: [],
				show: false,
			}
		},
		created() {
			this.getRecommendData()
			this.getGoodsData()
			this.getCategoryData()
		},
		methods: {
			showCart() {
				this.show = true
			},
			getRecommendData() {
				getRecommend().then(res => {
					// console.log(res)

					this.recommend = res.data.map(item => {
						// console.log(item);
						if (item.image) {
							item.image = 'http://127.0.0.1:8000' + item.image
						} else {
							item.image = '~assets/img/home/noPic.png'
						}
						console.log(item);
						return item
					})
				})
			},
			getGoodsData() {
				getGoods().then(res => {
					// console.log(res)
					let baseURL = 'http://127.0.0.1:8000'
					this.goods = res.data.map(item => {
						// console.log(item);
						if (item.image) {
							item.image = baseURL + item.image
						} else {
							let noPicURL = baseURL + '/static/order/nopic.png'
							item.image = noPicURL
						}
						// console.log(item);
						return item
					})
				})
			},
			getCategoryData() {
				getCategory().then(res => {
					// console.log(res)
					this.category = res.data
				})
			}
		},
	}
</script>

<style>
	.home {
		background-color: #FAFAFA;
		/* height: 2000px; */
	}

	.van-overlay {
		background-color: rgba(200, 200, 200, 0.7)
	}
</style>