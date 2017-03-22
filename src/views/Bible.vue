<template>
<div>
  <bible-item :contents="values" :theme="$route.params.type"></bible-item>
  <navigation :classification='_classification' :type='$route.params.type' v-on:next="thisNext"></navigation>
</div>
</template>

<script>
import BibleItem from '../components/BibleItem.vue'
import Navigation from '../components/Navigation.vue'
import bibleData from '../db/bible.js'

export default {
  components: {
    BibleItem,
    Navigation
  },
  data() {
    return {
      type: this.$route.params.type,
      values: bibleData.filter(this.filterConditions),
      _classification: ''
    }
  },
  methods: {
    filterConditions: function(element, index, array) {
      let type = this.$route.params.type;
      return element.theme === type;
    },
    thisNext: function(url){
      this.$router.push(url)
    },
    initFun: function (_route) {
      this.type = _route.params.type;
      this.values = bibleData.filter(this.filterConditions);
    }
  },
  watch: {
    '$route' (to, from) {
      this.initFun(to);
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      this.initFun(this.$route);
    })
  },
  created: function(){
    this._classification = "bible";
  }
}
</script>
