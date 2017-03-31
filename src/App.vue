<template>
<div style="height:100%;">
  <view-box ref="viewBox">
    <x-header v-if='false' slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;" :left-options="leftOptions" :title="title" @on-click-title="scrollTop"></x-header>
    <div style="padding-bottom: 50px;">
      <router-view></router-view>
    </div>
  </view-box>
  <tabbar slot="bottom" style="max-width: 600px; margin: 0 auto;">
    <tabbar-item :link="{path:'/Prayer/urgent'}" v-bind:class="{ weui_bar_item_on: this.$route.path === '/Prayer/urgent' }">
      <icon slot="icon" name="ambulance" scale="1.5" style="color: darksalmon;"></icon>
      <span slot="label">紧急/Top{{newTop}}</span>
    </tabbar-item>
    <tabbar-item :link="{path:'/Read'}" v-bind:class="{ weui_bar_item_on: this.$route.path === '/Read' }">
      <icon slot="icon" name="clock-o" scale="1.5" style="color: darksalmon;"></icon>
      <span slot="label">阅读中心</span>
    </tabbar-item>
    <tabbar-item :link="{path:'/List/fellowship'}" v-bind:class="{ weui_bar_item_on: this.$route.path === '/List/fellowship' }">
      <icon slot="icon" name="list" scale="1.5" style="color: darksalmon;"></icon>
      <span slot="label">代祷分类</span>
    </tabbar-item>
    <tabbar-item :link="{path:'/Info'}" v-bind:class="{ weui_bar_item_on: this.$route.path === '/Info' || this.$route.path === '/'}">
      <icon slot="icon" name="github" scale="1.5" style="color: darksalmon;"></icon>
      <span slot="label">设置</span>
    </tabbar-item>
  </tabbar>
</div>
</template>

<script>
import {
  Tabbar,
  TabbarItem,
  ViewBox,
  XHeader
} from 'vux'
import Icon from 'vue-awesome/components/Icon.vue'
import {code} from './db/info.js';

export default {
  name: 'app',
  components: {
    Tabbar,
    TabbarItem,
    ViewBox,
    XHeader,
    Icon
  },
  data() {
    return {
      code: code,
      newTop: this.$utils.storage.getNewTop()
    }
  },
  methods: {
    scrollTop() {
      this.$refs.viewBox.scrollTop(0)
    }
  },
  computed: {
    leftOptions() {
      let path = this.$route.path
      let isShow = ['/Prayer/urgent', '/Prayer/today', '/List', '/Info'].find(function(value, index, arr) {
        return path === value
      })
      return {
        showBack: !isShow
      }
    },
    title() {
      if (this.$route.meta.title) {
        return this.$route.meta.title;
      } else {
        let title = this.$route.params.type;
        if (title === 'long') {
          title = '长期事项';
        } else if (title === 'all') {
          title = '全部事项';
        } else if (title === 'end') {
          title = '结束事项';
        } else if (title === 'today') {
          title = '今日Prayer';
        } else if (title === 'urgent') {
          title = '紧急Prayer';
        }
        return title;
      }
    }
  },
  created: function() {
    let _code = this.$utils.storage.getCode();
    if (_code !== this.code) {
      this.$utils.storage.savePrayInfoIsRead('{}');
      this.$utils.storage.saveCode(this.code);
    }
  }
}
</script>

<style lang="less">@import '~vux/src/styles/reset.less';

body {
    background-color: #fbf9fe;
}
.weui_tabbar {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: absolute;
    z-index: 100;
    bottom: 0;
    width: 600px;
    background-color: #f7f7fa;
}
</style>
