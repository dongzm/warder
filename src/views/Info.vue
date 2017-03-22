<template>
<div>
  <panel :list="list" :type="type" style="margin:20px 0;display: block;"></panel>
  <group>
    <cell title="联系我们" is-link :link="{path:'/Contact'}">
      <span slot="value">发布代祷事项</span>
    </cell>
    <cell title="圣经背诵" is-link  :link="{path:'/List/bible'}">
      <span>我将你的话放在心里</span>
    </cell>
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
        src: 'http://omysl2i4v.bkt.clouddn.com/logo.jpg',
        title: '我们的异象',
        desc: '耶路撒冷啊，我在你城上设立守望的，他们昼夜必不静默。呼吁耶和华的，你们不要歇息， (以赛亚书 62:6 和合本)'
      }],
      type: "1"
    }
  }
}
</script>
