/**
 * [数组对象排序函数]
 * @param {[type]} item1 [description]
 * @param {[type]} item2 [description]
 */
function SortByProps(item1, item2) {
    "use strict";
    var props = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        props[_i - 2] = arguments[_i];
    }

    var cps = []; // 存储排序属性比较结果。
    // 如果未指定排序属性，则按照全属性升序排序。
    var asc = true;
    if (props.length < 1) {
        for (var p in item1) {
            if (item1[p] > item2[p]) {
                cps.push(1);
                break; // 大于时跳出循环。
            } else if (item1[p] === item2[p]) {
                cps.push(0);
            } else {
                cps.push(-1);
                break; // 小于时跳出循环。
            }
        }
    } else {
        for (var i = 0; i < props.length; i++) {
            var prop = props[i];
            for (var o in prop) {
                asc = prop[o] === "asc";
                if (item1[o] > item2[o]) {
                    cps.push(asc ? 1 : -1);
                    break; // 大于时跳出循环。
                } else if (item1[o] === item2[o]) {
                    cps.push(0);
                } else {
                    cps.push(asc ? -1 : 1);
                    break; // 小于时跳出循环。
                }
            }
        }
    }

    for (var j = 0; j < cps.length; j++) {
        if (cps[j] === 1 || cps[j] === -1) {
            return cps[j];
        }
    }
    return 0;
}

var storage = {
  storage: window.localStorage,
  saveCode: function(value) {
      this.storage.setItem("CODE", value);
  },
  getCode: function() {
      return this.storage.getItem("CODE") || 0;
  },
  saveNewTop: function(value) {
      this.storage.setItem("NEWTOP", value);
  },
  getNewTop: function() {
      return this.storage.getItem("NEWTOP") || '10';
  },
  savePrayInfoIsRead: function(value) {
      this.storage.setItem("PRAYINFOISREAD", JSON.stringify(value));
  },
  getPrayInfoIsRead: function() {
      try{
        return JSON.parse(this.storage.getItem("PRAYINFOISREAD")) || {isRemind: false, readDate:''};
      }catch(e){
        return {isRemind: false, readDate:''};
      }

  },
}

var utils = {
    SortByProps: SortByProps,
    storage: storage
}
export default utils
