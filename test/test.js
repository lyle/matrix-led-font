'use strict';
const assert = require('assert');
const matrixFont  = require('../src/index.js');
const dStringArray=['01111111','01000001','01000001','00111110','00000000'];
const dArray = [
          0b01111111,
          0b01000001,
          0b01000001,
          0b00111110,
          0b00000000]
const singleQuoteArray=[
          0b00000011,
          0b00000000];

/** @test {getBufferFromLine} */
describe('getBufferFromLine',function(){
  it('should return [] for empty message', function(){
    console.log("actual")
    let actual = matrixFont.getBufferFromLine('');
    console.log(actual)
    assert.deepEqual(actual, Uint8Array.from([]));
  });
  it('should return LED Matris for DD', function(){
    let ddArray= [0b01111111,0b01000001,0b01000001,0b00111110,0b00000000,0b01111111,0b01000001,0b01000001,0b00111110,0b00000000];
    let actual = matrixFont.getBufferFromLine('DD');
    console.log(actual)
    assert.deepEqual(actual, Uint8Array.from(ddArray));
  });
})

/** @test {getBufferFromGlyph} */
describe('getBufferFromGlyph',function(){
  it('should return [] for empty string', function(){
    let actual = matrixFont.getBufferFromGlyph('');
    assert.deepEqual(actual, Uint8Array.from([]));
  });
  it('should return [] for unknown-glyph', function(){
    let actual = matrixFont.getBufferFromGlyph('not-supported-glyph');
    assert.deepEqual(actual, Uint8Array.from([]));
  });

  it('should return LED Matrix for D', function(){
    let actual = matrixFont.getBufferFromGlyph('D');
    assert.deepEqual(actual, Uint8Array.from(dArray))
  });

 it('should return LED Matrix for \\ (back slash)', function(){
  let slashArray =[
          0b00000001,
          0b00000110,
          0b00011000,
          0b01100000,
          0b00000000];
   let actual = matrixFont.getBufferFromGlyph('\\');
   assert.deepEqual(actual, Uint8Array.from(slashArray))
 });

 it('should return LED Matrix for \' (Single quote)', function(){
   let actual = matrixFont.getBufferFromGlyph('\'');
   assert.deepEqual(actual,Uint8Array.from(singleQuoteArray))
 });

 it('should return LED Matrix for a UTF8 Char, ♡ (Heart)', function(){
   let heartArray=[
          0b00011110,
          0b00100001,
          0b01000001,
          0b10000110,
          0b10000110,
          0b01000001,
          0b00100001,
          0b00011110];
   let actual = matrixFont.getBufferFromGlyph('♡');
   assert.deepEqual(actual, Uint8Array.from(heartArray))
 });
  it('should return LED Matrix for a space', function(){
   let space = [
          0b00000000,
          0b00000000,
          0b00000000,
          0b00000000]
   let actual = matrixFont.getBufferFromGlyph(' ');
   assert.deepEqual(actual, Uint8Array.from(space))
 });
})

/** @test {getAllGlyphs}
 */
describe('getAllGlyphs', function(){
  it('return all the glyphs we have', function(){
    let actual = matrixFont.getAllGlyphs()
    assert.equal(97,actual.length)
  })
})
/** @test {concat}
 */
describe('concat', function(){
  let a  = [1,2,3,4];
  let b  =         [5,6,7,8];
  let ab = [1,2,3,4,5,6,7,8]
  it('should concat to arrays together', function(){
    let actual = matrixFont.concat(a,b)
    assert.deepEqual(ab,actual)
  })
  it('should concat an array and an empty array', function(){
    let actual = matrixFont.concat(a,[])
    assert.deepEqual(a,actual)
  })
  it('should concat an empty array and an array', function(){
    let actual = matrixFont.concat([],b)
    assert.deepEqual(b,actual)
  })
  it('should concat two empty arrays', function(){
    let actual = matrixFont.concat([],[])
    assert.deepEqual([],actual)
  })
})

/** @test {flatMap}
 */
describe('flatMap', function(){
  let a  = [1,2,3,4];
  let b  =         [5,6,7,8];
  let ab = [1,2,3,4,5,6,7,8]
  let c  = [a,b]
  let createArray = (item)=> [item]

  it('should flaten one level', function(){
    let actual = matrixFont.flatMap(createArray,a)
    assert.deepEqual(a,actual)
  })
  /** @test {flatMap,getChar}
   */
  it('should flaten one level using getChar', function(){
    let actual = matrixFont.flatMap(matrixFont.getChar,['D'])
    assert.deepEqual(dStringArray,actual)
  })
  it('should flaten one level ', function(){
    let actual = matrixFont.flatMap(createArray,c)
    assert.deepEqual(c,actual)
  })
})


/** @test {getChar}
 * @deprecated -  remove in next major use
 */
describe('getChar', function(){

  it('should return LED Matrix of Strings for D', function(){
    let matrixD = matrixFont.getChar('D');
    assert.deepEqual(dStringArray,matrixD)
  });

  it('should return LED Matrixof Strings for \' (Single quote)', function(){

    let dArray=['00000011','00000000'];
    let matrixSingleQuote = matrixFont.getChar('\'');
    assert.equal(dArray.length, matrixSingleQuote.length);
    for (let i=0; i<dArray.length; i++) {
        assert.equal(matrixSingleQuote[i], dArray[i], i +'element is equal');
    };
  });

  it('should return LED Matrixof Strings for a UTF8 Char, ♡ (Heart)', function(){

    let heartArray=['00011110','00100001','01000001','10000110','10000110','01000001','00100001','00011110'];
    let matrixSingleQuote = matrixFont.getChar('♡');
    assert.equal(heartArray.length, matrixSingleQuote.length);
    for (let i=0; i<heartArray.length; i++) {
        assert.equal(matrixSingleQuote[i], heartArray[i], i +'element is equal');
    };
  });

})


