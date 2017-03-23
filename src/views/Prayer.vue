<template>
<div>
  <div v-transfer-dom>
    <confirm v-model="show" :title="title" :confirm-text='confirmText' :cancel-text='cancelText' @on-cancel="onCancel" @on-confirm="onConfirm"  @on-show="onShow"
      @on-hide="onHide">
      <p style="text-align:left;color: black;" v-html='infoContent'></p>
    </confirm>
  </div>
  <tab :line-width="2" v-show='$route.params.type === "urgent"' style="position: fixed; z-index: 1; width: 100%;max-width: 600px;">
    <tab-item :selected="current === item" v-for="(item, index) in list" :class="{'vux-1px-r': index===0}" @on-item-click="current = item" :key="index">{{item}}</tab-item>
  </tab>
  <div v-show='current === "紧急pray" && $route.params.type === "urgent"' class="cus-bottom">
    <contents :contents="values"></contents>
    <navigation :classification='_classification' :type='$route.params.type' v-on:next="thisNext"></navigation>
  </div>
  <div v-show='$route.params.type !== "urgent"'>
    <contents :contents="values"></contents>
    <navigation :classification='_classification' :type='$route.params.type' v-on:next="thisNext"></navigation>
  </div>
  <div v-show='current === "今天pray"' class="cus-bottom">
    <contents :contents="todayValues"></contents>
    <navigation :classification='_classification' :type='$route.params.type' v-on:next="thisNext"></navigation>
  </div>
</div>
</template>

<script>
import contents from '../components/contents.vue'
import Navigation from '../components/Navigation.vue'
import {
  Tab,
  TabItem,
  Confirm,
  TransferDomDirective as TransferDom
} from 'vux'
import {
  listDate as contentsData
} from '../db/contents.js'
import listData from '../db/list.js'
import {
  infos,
  code
} from '../db/info.js'
import dateFormat from 'dateformat';

export default {
  name: 'paryer',
  directives: {
    TransferDom
  },
  components: {
    contents,
    Navigation,
    Tab,
    TabItem,
    Confirm
  },
  data() {
    let that = this;
    return {
      type: this.$route.params.type,
      values: [],
      todayValues: [],
      list: ['紧急pray', '今天pray'],
      current: '紧急pray',
      orderby: {
        updateDate: 'desc'
      },
      _classification: '',
      title: '',
      show: false,
      confirmText: '不在提醒',
      cancelText: '关闭',
      info: infos[0],
      title: '',
      infoContent: ''
    }
  },
  methods: {
    filterConditions: function(element, index, array, type) {
      let now = new Date();
      let isEnd = false;
      if (element.endDate) { //如果有结束时间，是否结束
        let d = Date.parse(element.endDate.replace(/-/g, "/"));
        isEnd = d < now.getTime();
      }
      isEnd = element.isEnd || isEnd; //标注结束，或者时间已经结束都是结束
      array[index]["isEnd"] = isEnd;
      let isToday = dateFormat(now, "yyyy-mm-dd") === element.updateDate;
      if (type === 'today') {
        return (!isEnd && isToday);
      } else if (type === 'urgent') {
        return (!isEnd && element.isUrgent);
      } else if (type === 'end') {
        return isEnd;
      } else if (type === 'long') {
        return (!isEnd && element.isLong);
      } else if (type === 'all') {
        return (!isEnd);
      } else {
        return (!isEnd && element.group.indexOf(type) > -1);
      }
    },
    thisNext: function(url) {
      this.$router.push(url)
    },
    initFun: function(_route) {
      let that = this;
      this.type = _route.params.type;
      if (this.type === 'urgent') {
        this.todayValues = contentsData.filter(function(element, index, array) {
          return that.filterConditions(element, index, array, 'today');
        }).sort(function(a, b) {
          return that.$utils.SortByProps(a, b, that.orderby);
        });
      }
      if (this.type === 'all') {
        this.orderby = {
          label: 'desc',
          updateDate: 'desc'
        }
      }
      this.values = contentsData.filter(function(element, index, array) {
        return that.filterConditions(element, index, array, that.type);
      }).sort(function(a, b) {
        return that.$utils.SortByProps(a, b, that.orderby);
      });
    },
    onCancel() {
      let today = dateFormat(new Date(), "yyyy-mm-dd");
      this.$utils.storage.savePrayInfoIsRead({
        isRemind: false,
        readDate: today
      });
    },
    onConfirm() {
      let today = dateFormat(new Date(), "yyyy-mm-dd");
      this.$utils.storage.savePrayInfoIsRead({
        isRemind: true,
        readDate: today
      });
    },
    onHide () {
      console.log('on hide')
    },
    onShow () {
      console.log('on show')
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
  created: function() {
    this._classification = "fellowship";
    let _code = this.$utils.storage.getCode();
    let read = this.$utils.storage.getPrayInfoIsRead();
    let isShow = this.info.isShow;
    let starttime = Date.parse(this.info.createtime.replace(/-/g, "/"));
    let currenttime = (new Date()).getTime();
    let endtime = this.info.endtime;
    //更加code、isRemind和readDate判断是否在提醒
    if (isShow && starttime < currenttime && _code === code && !read.isRemind) {
      let today = dateFormat(new Date(), "yyyy-mm-dd");
      if (!endtime && read.readDate !== today) {
        this.show = true;
        this.title = this.info.title;
        this.infoContent = this.info.content;
      } else if(read.readDate !== today){
        endtime = Date.parse(endtime.replace(/-/g, "/"));
        if (endtime > currenttime) {
          this.show = true;
          this.title = this.info.title;
          this.infoContent = this.info.content;
        }
      }
    }
  }
}
</script>

<style media="screen">
.cus-bottom {
  padding-top: 45px;
}
</style>
