// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:\""
var stringifyJSON = function (obj) {
  var stringifyResult = '';
  // Iterate through object
  var toString = function (item) {
    if (typeof item === 'number') {
      stringifyResult += item;
    } else if (typeof item === 'string') {
      stringifyResult += '\"'+ item + '\"';
    } else if (typeof item === 'object' && !Array.isArray(item) && item !== null) {
      stringifyResult += '{';

      for (var key in item) {
        stringifyResult += '\"' + key + '\"' + ':';
        toString(item[key]);
        stringifyResult += ',';
      }
      stringifyResult = stringifyResult.substring(0, stringifyResult.length - 1) + '}';

    } else if (Array.isArray(item)) {
      stringifyResult += '[';
      if (item.length > 0) {
        for (let i = 0; i < item.length; i++) {
          toString(item[i]);
          stringifyResult += ',';
        }
        stringifyResult = stringifyResult.substring(0, stringifyResult.length - 1) + ']';
      } else {
        stringifyResult += ']';
      }
    } else {
      stringifyResult += item;
    }
  };
  toString(obj);
  return stringifyResult;

  /*
  obj = {
    a : 10,
    b : [3,5,7],
    c : "hello",
    d : {
      f : 9,
      g : [4],
    }
  } */

};
