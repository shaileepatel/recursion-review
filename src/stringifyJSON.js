// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result = '';
  // Iterate through object
  var toString = function (item){
    if (typeof item === 'number') {
      result += item + ',';
    } else if (typeof item === 'string') {
      result += '"' + item + '"' + ',';
    } else if (typeof item === 'object' && !Array.isArray(item)) {
      result += '{';
      for (var key in item) {
        toString(item[key]);
      }
    }
    // If array
  };
  // If string/number/boolean

  if (Array.isArray(obj)) {
    result = '[';
    for (let i = 0; i < obj.length; i++) {
      result += toString(obj[i]) + ', ';
    }
    return result + ']';
  } else if (typeof obj === 'object' && !Array.isArray(obj)) {
    result = '{';
    for (let key in input) {

    }
    return result + '}';
  }
};
