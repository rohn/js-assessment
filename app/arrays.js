if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var num = 0;
        for (var i in arr) {
            num = num + arr[i];
        }
        return num;
    },

    remove : function(arr, item) {
        var newArr = [];
        for (var i in arr) {
            if (arr[i] !== item) {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    },

    removeWithoutCopy : function(arr, item) {
        for (var i =0, len = arr.length; i < len; i++) {
            if (arr[i] === item) {
                arr.splice(i,1);
                i -= 1;
                len -= 1;
            }
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    concat : function(arr1, arr2) {
        var arr3 = arr1.concat(arr2);
        return arr3;
    },

    insert : function(arr, item, index) {
        arr.splice(index,0,item);
        return arr;
    },

    count : function(arr, item) {
        var counter = 0;
        for (var i in arr) {
            if (arr[i] == item) {
                counter += 1;
            }
        }
        return counter;
    },

    duplicates : function(arr) {
        var arr1 = [];
        var dupThing = '';
        arr.sort();
        for (var i in arr) {
            if (arr[i] == dupThing && arr1.indexOf(dupThing) < 0) {
                arr1.push(dupThing);
            }
            else {
                dupThing = arr[i];
            }
        }
        return arr1;
    },

    square : function(arr) {
        for (var i in arr) {
            arr[i] = arr[i] * arr[i];
        }
        return arr;
    },

    findAllOccurrences : function(arr, target) {
        var arr1 = [];
        for (var i in arr) {
            if (arr[i] == target) {
                arr1.push(i);
            }
        }
        return arr1;
    }
  };
});
