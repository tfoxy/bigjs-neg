/*! bigjs-neg v1.0.0 https://github.com/tfoxy/bigjs-neg/LICENSE */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory.bind(null));
  } else if (typeof exports === 'object') {
    module.exports = factory(GLOBAL);
  } else {
    root.bigjsNeg = factory();
  }
}(this, function () {
  'use strict';
  return function(Big) {
    if (!('neg' in Big.prototype)) {
      Big.prototype.neg = function () {
        var x = new Big(this);
        x.s = -x.s || null;
        return x;
      };
    }
  };
}));