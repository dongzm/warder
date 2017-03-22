<template>
<div>
  <panel header="阅读推荐" :list="list" type="2"></panel>
</div>
</template>

<script>
import {
  Panel,
  Grid,
  GridItem
} from 'vux'
import Icon from 'vue-awesome/components/Icon.vue'

export default {
  components: {
    Panel,
    Grid,
    GridItem,
    Icon
  },
  data() {
    return {
      list: [{
        title: '王怡 | 什么是禁食祷告？',
        desc: '有信徒问关于禁食祷告的事。这是我写过的两篇关于禁食的牧函。《这是举哀的日子》和《如果幸福你就饿一次》。求主引领祂的儿女，使我们的祷告，常常从举哀开始，到喜乐为止。',
        url: 'http://mp.weixin.qq.com/s?__biz=MzAxODY1NTYzNg==&mid=2656715385&idx=1&sn=308d7eada60764ffc62952d3ef4f1296&chksm=807c1282b70b9b94abd27d80394e07576efa5cd02cce073a75bfe4e53c9494406ca058ee2449&mpshare=1&scene=1&srcid=03162wfCuPpcB0v1iaPFo1WL#rd'
      }, {
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '“我确信自己爱上了这民族！”——读《山雨》有感（清泉）',
        desc: '早就听说《山雨》一书（注1）。该书由英国籍传教士富能仁（James Outram Fraser）的女儿所著，讲述了20世纪上半叶，富能仁于云南傈僳族传教近30年的故事。',
        url: 'http://mp.weixin.qq.com/s?__biz=MjM5ODg2MjUxNA==&mid=2653161516&idx=1&sn=1739f3e7ecad0c201f0dcade31f96cbe&chksm=bd14e3f18a636ae7522dd0b74f2883ac00d97000b470d847ef7b4b2ecabf51be2f24c8cb6492&mpshare=1&scene=1&srcid=0202Ogj1ntWAJFSGuHL7e1FM#rd'
      }]
    }
  },
  methods: {
    filterConditions: function(element, index, array) {
      return element.type === 'fellowship';
    }
  }
}
</script>
