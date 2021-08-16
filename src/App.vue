<template>
	<div id="app">
		<router-view></router-view>

	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				count: 0
			}
		},
		components: {

		},
		methods: {
		}
	}
</script>

<style>
	@import url("assets/css/base.css");
</style>