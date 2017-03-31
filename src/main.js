// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import filters from './filters';
import 'vue-awesome/icons'
import utils from './utils';
import App from './App'
import List from './views/List.vue'
import Info from './views/Info.vue'
import Prayer from './views/Prayer.vue'
import Contact from './views/Contact.vue'
import Bible from './views/Bible.vue'
import Read from './views/Read.vue'
import Setting from './views/Setting.vue'
import HistoryInfo from './views/HistoryInfo.vue'

Vue.prototype.$utils = utils;
Object.keys(filters).forEach(function(k) {
  Vue.filter(k, filters[k]);
});

Vue.use(VueRouter)

const routes = [{
  path: '/List/:type',
  component: List,
  meta: {
    title: "分类"
  },
}, {
  path: '/Contact',
  component: Contact,
  meta: {
    title: "联系我们"
  },
}, {
  path: '/Info',
  component: Info,
  meta: {
    title: "信息通知"
  },
}, {
  path: '/Read',
  component: Read,
  meta: {
    title: "阅读中心"
  },
}, {
  path: '/Prayer/:type',
  component: Prayer
}, {
  path: '/Bible/:type',
  component: Bible
}, {
  path: '/Setting',
  component: Setting,
  meta: {
    title: "系统设置"
  }
}, {
  path: '/HistoryInfo',
  component: HistoryInfo,
  meta: {
    title: "历史公告"
  }
}, {
  path: '/*',
  component: Info,
  meta: {
    title: "信息通知"
  }
}]


const router = new VueRouter({
  routes
})

router.afterEach((to, from) => {
  //console.log(to);
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    let title = to.params.type;
    if (title === 'long') {
      title = '长期事项';
    } else if (title === 'all') {
      title = '全部事项';
    } else if (title === 'end') {
      title = '结束事项';
    } else if (title === 'today') {
      title = '今日Pray';
    } else if (title === 'urgent') {
      title = '紧急Pray';
    }
    document.title = title;
  }

})

FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
