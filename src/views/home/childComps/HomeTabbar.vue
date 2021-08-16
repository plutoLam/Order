<template>
	<div class="home-tab">
		<div class="left" @click="showCart()">
			<van-badge :content="cartlist.length">
				<div class="cart">
					<img src="~assets/img/home/cart.png" alt="">
				</div>
			</van-badge>

			<div class="price">
				￥{{ALLMONEY}}
			</div>
		</div>
		<div class="go" @click="go()">
			选好了
		</div>
	</div>
</template>

<script>
	import { Badge } from 'vant';
	import { mapState, mapGetters } from 'vuex'
	export default {
		name: "HomeTabbar",
		components: {
			[Badge.name]: Badge
		},
		methods: {
			showCart() {
				this.$emit('showCart')
			},
			go() {
				// console.log('go');
				this.$router.push({ name: 'submitorder' })
			}
		},
		computed: {
			...mapState(['cartlist']),
			...mapGetters(['ALLMONEY']),
			// price() {
			// 	return this.cartlist.reduce((preValue, item) => {
			// 		return preValue + item.price * item.count
			// 	}, 0).toFixed(2)
			// }
		}
	}
</script>

<style scoped>
	.home-tab {
		width: 93%;
		height: 35px;
		background-color: #393834;
		position: fixed;
		bottom: 10px;
		left: 50%;
		transform: translate(-50%, 0);
		border-radius: 22.5px;
		display: flex;
		/* overflow: hidden; */
		color: white;
		z-index: 2;
	}

	.left {
		display: flex;
		width: 70%;
	}

	.cart {
		width: 35px;
		height: 35px;
		border-radius: 22.5px;
		background-color: #2E2E2E;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.price {
		line-height: 35px;
		padding-left: 9px;
	}

	.go {
		position: absolute;
		right: 0;
		width: 30%;
		height: 100%;
		background-color: #FE6635;
		text-align: center;
		line-height: 35px;
		font-size: 14px;
		border-top-right-radius: 35px;
		border-bottom-right-radius: 35px;
	}

	.cart img {
		width: 18px;
		height: 18px;
	}
</style>