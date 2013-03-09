if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        return 1 & (num >> (bit - 1));
    },

    base10: function(str) {
        return parseInt(str,2);
    },

    convertToBinary: function(num) {
        var bin;
        bin = num.toString(2);
        while (bin.length < 8) bin = "0" + bin;
        return bin;
    },

    multiply: function(a, b) {
        var result = +(a * b).toFixed(5);
        return result;
    }
  };
});

