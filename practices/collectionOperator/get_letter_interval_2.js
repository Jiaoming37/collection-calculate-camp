'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var result=[];

  if (number_a <= number_b) {

    for (var i = number_a; i < number_b+1; i++) {

      if(i<=26){

        var char= String.fromCharCode(96 + i);

     }else{

        var n=parseInt(i/26);

        if(i%26==0){

          var char=String.fromCharCode(96+n-1)+String.fromCharCode(96 + (i-26*(n-1)));

        } else{

          var char= String.fromCharCode(96+n)+String.fromCharCode(96 + (i-26*n));

        }
      }

      result.push(char);
    }
  }
  else {

    for (var i = number_a; i > number_b-1; i--) {

      if(i<=26){

        var char= String.fromCharCode(96 + i);

      }else{

        var n=parseInt(i/26);

        if(i%26==0){

          var char=String.fromCharCode(96+n-1)+String.fromCharCode(96 + (i-26*(n-1)));

        } else{

          var char= String.fromCharCode(96+n)+String.fromCharCode(96 + (i-26*n));

        }
      }

      result.push(char);

    }
  }
  return result;
}

module.exports = get_letter_interval_2;

