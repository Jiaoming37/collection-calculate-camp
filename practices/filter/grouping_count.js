'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var result=[];
  var not_same_collection=[];
  var repeat_time_collection=[];

  // get not repeat collection;
  for(var i=0;i<collection.length-1;i++){

    var not_repeat=false;

    for(var j=i+1;j<collection.length;j++){

      if(collection[i]==collection[j]){

        not_repeat=true;

        break;
      }
    }
    if(!not_repeat){

      not_same_collection.push(collection[i]);
    }

  }
  not_same_collection.push(collection[collection.length-1]);

  not_same_collection.sort();

  //get not repeat collection's repeat time;
  for(var i=0;i<not_same_collection.length;i++){

    var not_repeat_collection_i_repeat_time=0;

    for(var j=0;j<collection.length;j++){

      if(not_same_collection[i]==collection[j]){

        not_repeat_collection_i_repeat_time+=1;
      }
    }
    repeat_time_collection.push(not_repeat_collection_i_repeat_time);

    //show in key-value result;
    result.push(parseInt(not_same_collection[i])+':'+parseInt(not_repeat_collection_i_repeat_time));
  }

  return result;

}

module.exports = grouping_count;
