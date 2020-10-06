// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:\""
var stringifyJSON = function (obj) {
  var stringifyResult = '';
  var toString = function (item) {
    if (typeof item === 'string') {
      stringifyResult += '\"' + item + '\"';
    } else if (typeof item === 'object' && !Array.isArray(item) && item !== null) {
      stringifyResult += '{';
      for (var key in item) {
        if (typeof item[key] !== 'function' && item[key] !== undefined) {
          stringifyResult += '\"' + key + '\"' + ':';
          toString(item[key]);
          stringifyResult += ',';
        }
      }
      stringifyResult = removeComma(stringifyResult);
      stringifyResult += '}';
    } else if (Array.isArray(item)) {
      stringifyResult += '[';
      for (let i = 0; i < item.length; i++) {
        toString(item[i]);
        stringifyResult += ',';
      }
      stringifyResult = removeComma(stringifyResult);
      stringifyResult += ']';
    } else {
      // Considering case for numbers, booleans, null
      stringifyResult += item;
    }
  };
  toString(obj);
  return stringifyResult;
};

var removeComma = function(stringifyResult) {
  if (stringifyResult[stringifyResult.length - 1] === ',') {
    stringifyResult = stringifyResult.substring(0, stringifyResult.length - 1);
  }
  return stringifyResult;
};