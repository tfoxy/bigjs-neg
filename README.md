bigjs-neg
==========

Add negated method to big.js

## Load

It can be loaded via a script tag in an HTML document for the browser

    <script src='./relative/path/to/bigjs-neg.js'></script>

or as a CommonJS, [Node.js](http://nodejs.org) or AMD module using `require`.

    var bigjsNeg = require('bigjs-neg');

For Node.js, the library is available from the npm registry:

    $ npm install bigjs-neg

## Use

    var Big = require('big.js');
    bigjsNeg(Big);
    
    new Big(3).neg() => -3
