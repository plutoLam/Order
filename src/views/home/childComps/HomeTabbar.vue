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
		height: 2.1875rem;
		background-color: #393834;
		position: fixed;
		bottom: 0.625rem;
		left: 50%;
		transform: translate(-50%, 0);
		border-radius: 1.4063rem;
		display: flex;
		/* overflow: hidden; */
		color: white;
		z-index: 4;
	}

	.left {
		display: flex;
		width: 70%;
	}

	.cart {
		width: 2.1875rem;
		height: 2.1875rem;
		border-radius: 1.4063rem;
		background-color: #2E2E2E;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.price {
		line-height: 2.1875rem;
		padding-left: 0.5625rem;
	}

	.go {
		position: absolute;
		right: 0;
		width: 30%;
		height: 100%;
		background-color: #FE6635;
		text-align: center;
		line-height: 2.1875rem;
		font-size: 0.875rem;
		border-top-right-radius: 2.1875rem;
		border-bottom-right-radius: 2.1875rem;
	}

	.cart img {
		width: 1.125rem;
		height: 1.125rem;
	}
</style>