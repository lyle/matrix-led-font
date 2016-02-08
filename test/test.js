'use strict';
var assert = require('assert');

describe('getChar', function(){

  it('should return LED Matrix for D', function(){
    var matrixFont  = require('../index.js');

    var dArray=['01111111','01000001','01000001','00111110','00000000','00000000','01110000','00000000'];
    var matrixD = matrixFont.getChar('D');
    assert.equal(dArray.length, matrixD.length);
    for (var i=0; i<dArray.length; i++) {
        assert.equal(matrixD[i], dArray[i], i +'element is equal');
    };
  });

  it('should return LED Matrix for \' (Single quote)', function(){
    var matrixFont  = require('../index.js');

    var dArray=['00000011','00000000','00000000','00000000','00000000','00000000','01110000','00000000'];
    var matrixSingleQuote = matrixFont.getChar('\'');
    assert.equal(dArray.length, matrixSingleQuote.length);
    for (var i=0; i<dArray.length; i++) {
        assert.equal(matrixSingleQuote[i], dArray[i], i +'element is equal');
    };
  });
})


