<template>
<div>
  <group  gutter="0">
    <cell  v-for="(value, key) in contents"  :key="key" :title="value.index+'、'+value.title+'('+value.chapter+')'" :inline-desc="value.content">
    </cell>
  </group>
  <divider v-if='contents.length === 0'>暂无数据</divider>
</div>
</template>
<script>
import {
  Group,
  Cell,
  Divider
} from 'vux'
export default {
  components: {
    Group,
    Cell,
    Divider
  },
  props: {
    contents: {
      type: Array,
      default: []
    },
    theme: {
      type: String
    }
  },
  data() {
    return {}
  },
  created() {},
  methods: {

  },
  watch: {},
  events: {}
}
</script>
