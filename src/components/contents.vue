<template>
  <div style="margin-top:0;">
    <group gutter="0">
      <cell v-for="(value, key) in contents" :key="key">
        <div slot="child">
          <p style="font-size:16px;line-height:1.4;color: black;" v-if='!value.isLarge'>{{key+1}}、{{value.content|omitted}}
            <span type="primary" v-if='value.content.length>280 || value.link || value.content.indexOf("===>")>-1' @click="changeBig(value)">
              <u style='color:crimson;font-size: 1.05em;' v-if='value.link'>
                <i>外链文章</i>
              </u>
              <u style='color:chocolate;font-size: 1.05em;' v-else>
                <i>更多详情</i>
              </u>
            </span>
          </p>
          <p style="font-size:16px;line-height:1.4;color: black;" v-if='value.isLarge'>{{key+1}}、{{value.content|addLength}}
            <span style='color:chocolate;' type="primary" @click="changeBig(value)"><u><i>收起</i></u></span>
          </p>
          <p style="font-size:14px;line-height:1.4;color: chocolate;" v-if="value.isEnd">{{value.archiveContent|endDefaulContent}}</p>
          <p style="color:#999;font-size:12px;padding-top: 5px;" v-if="value.isEnd">{{value.createDate}} ~ {{value.endDate}}</p>
          <div v-else>
            <div style="color:#999;font-size:12px;padding-top: 5px;float: left;">
              <icon slot="icon" name="tag" scale="1" style="color: limegreen;vertical-align: middle;"></icon>&nbsp;{{value.label}}、&nbsp;{{value.group}}
            </div>
            <div style="float: right;color:#999;font-size:12px;padding-top: 5px;">
              {{value.updateDate}}
            </div>
          </div>
        </div>
      </cell>
    </group>
    <divider v-if='contents.length === 0'>暂无数据</divider>
  </div>
</template>

<script>
  import {
    Card,
    Divider,
    XButton,
    Cell,
    Group
  } from 'vux'
  import Icon from 'vue-awesome/components/Icon.vue'
  export default {
    components: {
      Card,
      Divider,
      XButton,
      Icon,
      Cell,
      Group
    },
    props: {
      contents: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        isLarge: false
      }
    },
    created() {},
    methods: {
      changeBig: function(value) {
        if (value.link) {
          window.location.href = value.link;
        } else {
          value.isLarge = !value.isLarge;
        }
      }
    },
    watch: {},
    events: {}
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
    padding: 5px 15px;
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
