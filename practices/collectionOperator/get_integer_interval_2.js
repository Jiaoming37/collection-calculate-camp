'use strict';

function get_integer_interval_2(number_a, number_b) {
  //only according to the test with not thinking,so forget one situation.
  var result=[];

  if(number_a<=number_b){

    for(var i=number_a;i<number_b+1;i++){

      if(i%2==0){

        result.push(i);

      }
    }

  }else{

      for(var i=number_a;i>number_b-1;i--){

        if(i%2==0){

          result.push(i);

        }
      }
  }

  return result;

}

module.exports = get_integer_interval_2;
