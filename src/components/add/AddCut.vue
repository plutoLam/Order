<template>
  <div class="add-cut">
    <div class="cut" @click="cut">
      -
    </div>
    <span class="num">{{num}}</span>
    <add @click.native="add"></add>
  </div>

</template>

<script>
  import Add from './Add.vue'
  export default {
    name: "AddCut",
    components: {
      Add,
    },
    data() {
      return {
        // num: 0
      }
    },
    props: {
      num: {
        type: Number,
        default: 0
      }
    },
    methods: {
      cut() {
        this.$emit('cut')
      },
      add() {
        this.$emit('add')
      }
    }
  }
</script>

<style scoped>
  .add-cut {
    display: flex;
    align-items: center;
  }

  .num {
    margin: 0 10px;
  }

  .cut {
    background-color: white;
    width: 1.375rem;
    height: 1.375rem;
    text-align: center;
    line-height: 1.175rem;
    border-radius: 0.6875rem;
    color: black;
    border: solid 1px #eee;
  }
</style>