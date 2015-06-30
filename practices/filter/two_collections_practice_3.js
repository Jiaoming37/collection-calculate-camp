'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  var result=[];

  for(var i=0;i<collection_a.length;i++){

    var can_be_divisible=false;

    for(var j=0;j<collection_b.length;j++){

      if(collection_a[i]%collection_b[j]==0){

        can_be_divisible=true;

        break;
      }
    }
    if(can_be_divisible){

      result.push(collection_a[i]);
    }
  }
  return result;
}

module.exports = choose_divisible_integer;
