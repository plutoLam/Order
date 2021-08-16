<template>
	<div class="home-info">
		<div class="info">
			<img class="dining" src="~assets/img/home/dining.png">
			桌台 <span class="black">31· {{$store.state.TableNum}}</span> 位
			<a href="#" class="search" @click="search()">
				<img src="~assets/img/home/search.png">
			</a>
			<a href="#" class="order">
				<img src="~assets/img/home/order.png">
			</a>

		</div>
		<h2>小民大排档(软件园店)</h2>
		<div class="more">
			<p>欢迎光临,很高兴为您服务</p>
			<span class="go-more">
				展开全部
				<a href="#">
					<img src="~assets/img/home/down.png">
				</a>

			</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "HomeInfo",
		methods: {
			search() {
				this.$emit('search')
			}
		},

	}
</script>

<style scoped>
	.black {
		color: #000000;
		font-weight: 600;
	}

	.home-info {
		height: 6.875rem;
		/* background-color: pink; */
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin: 0.8125rem 0.75rem;
	}

	.info {
		display: flex;
		align-items: center;
		position: relative;
	}

	.dining {
		margin-right: 0.3125rem;
	}

	.search {
		position: absolute;
		right: 1.975rem;
	}

	.order {
		position: absolute;
		right: 0;
	}

	.info img {
		width: 1.25rem;
		height: 1.25rem;
	}

	.more {
		display: flex;
	}

	.go-more {
		display: flex;
	}

	.more img {
		width: 0.625rem;
		height: 0.625rem;
	}

	h2 {
		color: black;
		font-weight: 600;
		font-size: 1.25rem;
	}

	.more {
		font-size: 0.0625rem;
		display: flex;
		justify-content: space-between;
		margin-top: 0.3125rem;
	}

	.go-more {
		display: flex;
		align-items: center;
	}

	.go-more img {
		margin-left: 0.1875rem;
	}
</style>