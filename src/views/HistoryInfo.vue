<template>
  <div>
    <group gutter="0">
      <cell v-for="(value, key) in infos" :key="key">
        <div slot="child"></div>
        <div slot="child">
          <h4>{{value.index+'、'+value.title}}</h4>
          <p style="font-size:16px;line-height:1.4;color: black;" v-html='value.content'></p>
          <div>
            <div style="color:#999;font-size:12px;padding-top: 5px;float: left;">
              {{value.createtime|delStr}} ~ {{value.endtime|delStr}}
            </div>
            <div style="float: right;color:#999;font-size:12px;padding-top: 5px;">
              &nbsp;
            </div>
          </div>
        </div>
      </cell>
    </group>
    <divider v-if='infos.length === 0'>暂无数据</divider>
  </div>
</template>

<script>
  import {
    infos
  } from '../db/info.js'
  import {
    Group,
    Cell,
    Divider
  } from 'vux'
  export default {
    name: "HistoryInfo",
    components: {
      Group,
      Cell,
      Divider
    },
    data() {
      return {
        infos: infos.filter(this.filterConditions)
      }
    },
    methods: {
      filterConditions: function(element, index, array) {
        return element.isShow;
      }
    },
    watch: {
      '$route' (to, from) {
        this.infos = infos.filter(this.filterConditions);
      }
    }
  }
</script>
