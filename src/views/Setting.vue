<template>
  <div>
    <divider>
      紧急/Top{{top}}中最新显示前{{top}}条</divider>
    <div class="box">
      <checker v-model="top" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <checker-item @on-item-click='changeItem' value="5">5</checker-item>
        <checker-item @on-item-click='changeItem' value="10">10</checker-item>
        <checker-item @on-item-click='changeItem' value="15">15</checker-item>
        <checker-item @on-item-click='changeItem' value="20">20</checker-item>
        <checker-item @on-item-click='changeItem' value="25">25</checker-item>
        <checker-item @on-item-click='changeItem' value="30">30</checker-item>
      </checker>
    </div>
  </div>
</template>

<script>
  import {
    Divider,
    CheckerItem,
    Checker
  } from 'vux'
  
  import {
    date
  } from '../db/contents.js'
  
  export default {
    components: {
      Divider,
      CheckerItem,
      Checker
    },
    data() {
      return {
        top: this.$utils.storage.getNewTop()
      }
    },
    methods: {
      changeItem: function(itemValue, itemDisabled){
        this.$utils.storage.saveNewTop(itemValue)
      }
    }
  }
</script>

<style scoped>
  .box {
    padding: 0 15px;
  }
  
  .demo1-item {
    border: 1px solid #ececec;
    padding: 5px 15px;
  }
  
  .demo1-item-selected {
    border: 1px solid green;
  }
</style>
