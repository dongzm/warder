<template>
<div>
  <panel :list="list" :type="type" style="margin:20px 0;display: block;"></panel>
  <group>
    <cell title="圣经背诵" is-link  :link="{path:'/List/bible'}">
      <span>我将你的话放在心里</span>
    </cell>
    <cell title="联系我们" is-link :link="{path:'/Contact'}">
      <span slot="value">发布代祷事项</span>
    </cell>    
    <cell title="系统设置" is-link :link="{path:'/Setting'}">
      <span>系统参数设置</span>
    </cell>
    <cell title="历史公告" is-link :link="{path:'/HistoryInfo'}">
      <span>历史公告详情</span>
    </cell>
     <!--<cell title="功能更新" is-link :link="{path:'/SiteUpdate'}">
      <span>每次更新详情</span>
    </cell>-->
    <cell title="更新时间">
      <span>{{updateTime}}</span>
    </cell>
  </group>
</div>
</template>

<script>
import {
  Group,
  Cell,
  Panel
} from 'vux'

import {date} from '../db/contents.js'

export default {
  components: {
    Group,
    Cell,
    Panel
  },
  data() {
    return {
      updateTime: date,
      list: [{
        src: 'http://omysl2i4v.bkt.clouddn.com/logo.png',
        title: '我们的异象(赛 62:6)',
        desc: '耶路撒冷啊，我在你城上设立守望的，他们昼夜必不静默。呼吁耶和华的，你们不要歇息'
      }],
      type: "1"
    }
  }
}
</script>
