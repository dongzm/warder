exports.omitted = function (val, length = 280, symbol = '...') {
  var arr = val.split('===>')
  if (arr && arr[0] && arr.length > 1 && arr[0].length > 40) {
    return arr[0].substr(0, length) + symbol;
  }else if(arr && arr[0] && arr[0].length > length){
    return arr[0].substr(0, length) + symbol;
  }
  if (val && (val.length < 25 || val.length === 25)) {
    let spaces = "";
    for (let i = 0; i < 25 - val.length; i++) {
      spaces += "..."
    }
    return val + spaces
  }
  return val;
};

exports.addLength = function (val) {
  if (val && val.length < 25) {
    let spaces = "";
    for (let i = 0; i < 25 - val.length; i++) {
      spaces += "..."
    }
    return val + spaces
  }
  return val;
};

exports.endDefaulContent = function (val) {
  if (!val) {
    return '已经结束';
  }
  return val;
};

exports.delStr = function (val, length = 10) {
  if (val) {
    return val.substring(0, length);
  }
  return val;
};
