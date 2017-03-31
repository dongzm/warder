<template>
  <div style="width: 100%;">
    <div class="jump" @click="next(list[0])" v-bind:class="{ 'hide': !list[0] }">
      <icon slot="icon" name="arrow-circle-left" scale="2" style="color: limegreen;"></icon>
    </div>
    <div class="jump" @click="next(list[1])" v-bind:class="{ 'hide': !list[1] }">
      <icon slot="icon" name="arrow-circle-right" scale="2" style="color: limegreen;"></icon>
    </div>
  </div>
</template>

<script>
  import Icon from 'vue-awesome/components/Icon.vue'
  import listDate from '../db/list.js'
  export default {
    components: {
      Icon
    },
    props: {
      classification: {
        type: String
      },
      type: {
        type: String
      }
    },
    data() {
      return {
        list: ['', '']
      }
    },
    created() {},
    methods: {
      filterList: function() {
        let list = [];
        let _classification = this.classification
        listDate.forEach(function(val) {
          if (val.type === _classification) {
            if (val.name === '全部事项') {
              list.push("all " + val.url)
            } else if (val.name === '结束事项') {
              list.push("end " + val.url)
            } else if (val.name === '长期事项') {
              list.push("long " + val.url)
            } else {
              list.push(val.name + " " + val.url)
            }
          }
        });
        for (let i = 0; i < list.length; i++) {
          if (list[i].indexOf(this.type) === 0) {
            if (i === 0) {
              return ['', list[i + 1].split(' ')[1]]
            } else if (i === list.length - 1) {
              return [list[i - 1].split(' ')[1], '']
            } else {
              return [list[i - 1].split(' ')[1], list[i + 1].split(' ')[1]]
            }
            break;
          }
        }
      },
      next: function(url) {
        this.$emit('next', url);
      }
    },
    watch: {
      '$route' (to, from) {
        this.list = this.filterList() || ['', ''];
      }
    },
    events: {},
    mounted: function() {
      this.$nextTick(function() {
        this.list = this.filterList() || ['', ''];
      })
    }
  }
</script>

<style scoped lang="less">
  .jump {
    display: inline-block;
    width: 48%;
    text-align: center;
    margin-top: 20px;
    // border:1px solid  navajowhite;
  }
  
  .hide {
    visibility: hidden;
  }
</style>
