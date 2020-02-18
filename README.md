# matrix-led-font [![Build Status](https://travis-ci.org/lyle/matrix-led-font.svg?branch=master)](https://travis-ci.org/lyle/matrix-led-font)
A font for using [MAX7219 LED Matrix](http://playground.arduino.cc/Main/MAX72XXHardware) with Arduino, developed for use by a node server [LedMatrixMessenger](https://github.com/lyle/LedMatrixMessenger) that delivers messages to [WebToLEDMatrix](https://github.com/lyle/WebToLEDMatrix) an Aurdino LED display app.


# Install / Setup 

## install

`npm install matrix-led-font`

## Documentation

Please feel free to generate full esDocs (using a bash script due to esdocs having a vulnerability)...

`npm run docs` ->  then open ./docs/index.html

### getBufferFromGlyph(key: string): Uint8Array

Get a matrix to display one glyph

```
import {getBufferFromGlyph} from 'matrix-led-font'

let heartMatrix = getBufferFromGlyph('♡');
```
Returns a Buffer/Uint8Array that can be used to turn leds on/off on a matrix display.
```
[
    00011110,
    00100001,
    01000001,
    10000110,
    10000110,
    01000001,
    00100001,
    00011110
]
```
(look at that image with up being ---> )

### getBufferFromLine(line: string): Uint8Array 

```
import {getBufferFromLine} from 'matrix-led-font'
let twoHeartMatrix = import('♡♡');
```

Returns a Buffer/Uint8Array
```
[
    00011110,
    00100001,
    01000001,
    10000110,
    10000110,
    01000001,
    00100001,
    00011110,
    00011110,
    00100001,
    01000001,
    10000110,
    10000110,
    01000001,
    00100001,
    00011110
]
```

## run tests

`npm run test`

Or if you are doing any dev work feel free to ...

`npm run watch`
