'use strict'

function generateEvenNumbers(max) {

  var n = []

  for(var i =0 ; i<max ; i++){

    if(i %2 == 0) {

      n.push(i);

    }

  }



  return n;
}

module.exports = {
  generateEvenNumbers
}
