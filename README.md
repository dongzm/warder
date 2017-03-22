# warder

> Prayer Network

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 项目需要运行起来，需要在src/db下面添加四个.js文件

```js
bible.js
let bibleData = [{{
  index: '1',
  theme: "test",
  title:"test",
  chapter:"3 ：16",
  content:"test"
}]
export default bibleData
```

```js
contents.js
let listDate = [
{index:40,publisher:'test',group:'test',content:'test',updateDate:'2017-03-03',createDate:'2017-03-03',endDate:'2017-03-17'}
]

let date = '2017-03-21 23:23:22'

export {listDate, date};
```

```js
info.js
let code = "1";
let infos = [{
  index: 1,
  title: '消息公告',
  content: '支持html',
  isShow: true,
  createtime: '2017-03-21 01:01:01',
  endtime: '2017-03-26 00:00:01'
}]

export {infos,code};

```


```js
list.js
let listData = [
  {name: 'test', url: '/Prayer/test', icon: 'arrows-alt',type: 'fellowship'},  
  {name: 'test', url: '/Bible/test', icon: 'gear',type: 'bible'}
]
export default listData

```
