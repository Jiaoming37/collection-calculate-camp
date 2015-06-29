'use strict';

function choose_no_repeat_number(collection) {

  var result=[];

  for(var i=0;i<collection.length-1;i++) {

    var no_same_number = false;

    for (var j = i+1; j < collection.length; j++) {

      if (collection[i] == collection[j]) {

        no_same_number = true;

        break;
      }
    }

    if (no_same_number==false) {

      result.push(collection[i]);
    }
  }
  result.push(collection[collection.length-1]);

  return result;
}

module.exports = choose_no_repeat_number;
