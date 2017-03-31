<template>
  <div>
    <div style="text-align:center;">
      <divider>长按图片可添加微信和我联系</divider>
      <img src="../assets/weixin.png" style="width: 60%;"></img>
    </div>
    <card>
      <p slot="content" class="card-padding" style="font-size: 13px;color: red;">
        1、168代祷者持续招募，请著名姓名和教会或小组
        <br> 2、代祷信息发送给我们，我们将整理到平台
      </p>
    </card>
  </div>
</template>

<script>
  import {
    Divider,
    Card
  } from 'vux'
  
  export default {
    components: {
      Divider,
      Card
    },
    data() {
      return {
  
      }
    }
  }
</script>

<style scoped lang="less">
  @import '~vux/src/styles/1px.less';
  .card-demo-flex {
    display: flex;
  }
  
  .card-demo-content01 {
    padding: 10px 0;
  }
  
  .card-padding {
    padding: 15px;
  }
  
  .card-demo-flex>div {
    flex: 1;
    text-align: center;
    font-size: 12px;
  }
  
  .card-demo-flex span {
    color: #f74c31;
  }
</style>
