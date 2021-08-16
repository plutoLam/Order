<template>
	<div class="index">
		<div class="meituan">
			<img src="~assets/img/index/meituan.png">
			<h1>美团</h1>
		</div>
		<h4 class="shop-name">欢迎来到小民大排档(软件园店)</h4>

		<div class="choose">
			<h4>客观，你几位？</h4>
			<span class="table">桌号：31</span>
			<div class="wrap">
				<div class="people-num">
					<span class="button" @click="changeIndex(item)" v-for="item in 8"
						:class="{active:item==currentIndex}">{{item}}位</span>
				</div>
			</div>

			<div class="begin" @click="begin()">
				开始点餐
			</div>
		</div>
		<p class="support">美团餐饮系统提供技术支持</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				currentIndex: 1
			}
		},
		methods: {
			changeIndex(item) {
				this.currentIndex = item
			},
			begin() {
				this.$store.commit('changeTableNum', this.currentIndex)
				this.$router.push('/home')
				// console.log(this.$store.state.TableNum)
			}
		},
	}
</script>

<style scoped>
	.index {
		background: url(~assets/img/index/bg.png) no-repeat fixed center center;
		background-color: pink;
		height: 100vh;
		position: relative;
	}

	.meituan {
		position: absolute;
		top: 30%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		align-items: center;
	}

	.meituan img {
		height: 2.5rem;
		width: 2.7rem;
	}

	.meituan h1 {
		font-size: 1.875rem;
		color: white;
		font-weight: 600;
		margin-left: 0.625rem;
	}

	.shop-name {
		position: absolute;
		top: 38%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 1.0rem;
		white-space: nowrap;
		color: white;
	}

	.choose {
		height: 12.5rem;
		width: 90%;
		background-color: white;
		position: absolute;
		left: 5%;
		bottom: 6%;
		border-radius: 0.625rem;
	}

	.choose h4 {
		position: absolute;
		top: 0.625rem;
		left: 0.625rem;
		color: black;
		font-weight: 600;
	}

	.table {
		position: absolute;
		top: 2.6rem;
		left: 0.625rem;
		font-size: 0.875rem;
	}

	.wrap {
		overflow: hidden;
		width: 90%;
		height: 2rem;
		position: absolute;
		top: 6.1rem;
		left: 0.625rem;
	}

	.people-num {
		padding-bottom: 0.375rem;
		/* background-color: pink; */
		display: flex;
		overflow-x: scroll;
	}

	.button {
		/* width: 160px; */
		height: 2rem;
		padding: 0.3rem 1.1rem;
		border-radius: 1.25rem;
		white-space: nowrap;
		font-size: 0.875rem;
		text-align: center;
		line-height: 1.5rem;
	}

	.active {
		background-color: #FA9A08;
		color: white;
	}

	.begin {
		position: absolute;
		bottom: 0.4125rem;
		left: 0.625rem;
		width: 90%;
		height: 2.375rem;
		background-color: #FC6936;
		border-radius: 2.5rem;
		text-align: center;
		line-height: 2.375rem;
		color: white;
	}

	.support {
		position: absolute;
		bottom: 0.0225rem;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 0.2125rem;
		white-space: nowrap;
		color: white;
	}
</style>