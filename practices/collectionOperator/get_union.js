'use strict';

function get_union(collection_a, collection_b) {

  var result = [];

  for( var i =0; i < collection_a.length; i++){

    result.push(collection_a[i]);
  }

  for( var i =0; i < collection_b.length; i++){

    var not_in_collection_a = false;

    var item_b = collection_b[i];

    for( var j =0; j < collection_a.length; j++){

      if(item_b == collection_a[j]){

        not_in_collection_a = true;

        break;
      }
    }
    if(!not_in_collection_a){

      result.push(item_b);
    }
  }
  return result;
}

module.exports = get_union;

