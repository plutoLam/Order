<template lang="">
  <div class="navbar">
    <a href="#" @click="back()">
      <img src="~assets/img/common/leftArr.png" alt="">
    </a>
    <div>
      <slot name="title" class="title"></slot>
    </div>
    <div>
      <slot name="order"></slot>
    </div>


  </div>
</template>
<script>
  export default {
    name: "NavBar",
    methods: {
      back() {
        this.$emit('back')
      }
    },
    computed: {

    }
  }
</script>
<style scoped>
  .navbar {
    width: 100%;
    height: 2.9rem;
    display: flex;
    justify-content: space-between;
    background-color: white;
    align-items: center;
    padding: 0 .625rem;
  }
</style>