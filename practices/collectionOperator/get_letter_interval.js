'use strict';

function get_letter_interval(number_a, number_b) {
  //know how to change char from int in js ,but the number(96) is not fix and need try.

  var result=[];

  if (number_a <= number_b) {

    for (var i = number_a; i < number_b+1; i++) {

      var char= String.fromCharCode(96 + i);

      result.push(char);
    }
  }
  else {

    for (var i = number_a; i > number_b-1; i--) {

      var char= String.fromCharCode(96 + i);

      result.push(char);
    }
  }
    return result;

}

module.exports = get_letter_interval;
