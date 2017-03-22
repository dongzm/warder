exports.omitted = function(val, length = 280, symbol = '...'){
    if(val && val.length > length){
       return val.substr(0, length) + symbol;
    }
    if(val && val.length < 25){
      let spaces = "";
      for(let i=0; i<25-val.length; i++){
        spaces += "..."
      }
      return val + spaces
    }
    return val;
};
exports.endDefaulContent = function(val){
    if(!val){
       return '已经结束';
    }
    return val;
};
