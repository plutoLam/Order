<template lang="">
  <div class="submit">

    <router-view></router-view>
    <!-- <submit-tabbar></submit-tabbar> -->
  </div>
</template>
<script>
  import NavBar from 'components/navBar/NavBar'
  // import SubmitTabbar from './childComps/SubmitTabbar'
  export default {
    name: 'Submit',
    components: {
      // NavBar,
      // SubmitTabbar,
    },
  }
</script>
<style scoped>
  .submit {
    height: 100vh;
    background-color: #F2F2F2;
  }
</style>