// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  // Define the NodeList object of the entire body
  let allChildren = document.body.childNodes;
  let result = [];

  var nested = function(nodes) {
    // traverse through each element in the allChildren
    for (let key in nodes) {
      // If we wind up on the length property, we're done iterating through that particular NodeList
      if (typeof nodes[key] === 'number') {
        break;
      }
      // If the NodeList has a class list property, AND the class list includes the target className
      if (nodes[key].classList !== undefined) {
        if (nodes[key].classList.value.includes(className)) {
          // push that element to the result array
          result.push(nodes[key]);
        }
      }
      // if the NodeList has child nodes (is nested)
      if (nodes[key].childNodes.length > 0) {
        // Use recursion to traverse through the nested NodeList
        nested(nodes[key].childNodes);
      }
    }
  };
  // Call the 'nested' helper function
  nested(allChildren);
  // Add the body element to the result
  result.unshift(document.body);
  return result;
};
