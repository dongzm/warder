<template>
  <div>
    <grid>
      <grid-item  v-for="(date, key) in listData"  :key="key" v-bind:label="date.name" v-bind:link="date.url">
        <icon slot="icon" :name="date.icon" scale="1.5" style="color: darksalmon;"></icon>
      </grid-item>
    </grid>
  </div>
</template>

<script>
import listData from '../db/list.js'
import Icon from 'vue-awesome/components/Icon.vue'
import {
  Grid,
  GridItem
} from 'vux'

export default {
  name: "Prayer",
  components: {
    Grid,
    GridItem,
    Icon
  },
  data () {
    return {
      listData: listData.filter(this.filterConditions)
    }
  },
  methods: {
    filterConditions: function(element, index, array) {
      return element.type === this.$route.params.type;
    }
  },
  watch: {
      '$route' (to, from) {
          this.type = to.params.type;
          this.listData = listData.filter(this.filterConditions);
      }
  }
}
</script>
