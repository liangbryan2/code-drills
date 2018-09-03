/*Write a function called "smallestNumber".

Given an array of mixed elements, "smallestNumber" returns the smallest number in the array

ignore values that aren't numbers

Starter Code :*/
function smallestNumber(arr) {
  // code starts here

  var smallest = [];
  for (var i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      smallest.push(arr[i]);
    }
  }
  smallest.sort(function(a, b) {
    return a - b;
  })

  return smallest[0];








  
  // code ends here
}
var output = smallestNumber([4, 'lincoln', 9, 'octopus', 'a', 5, 10, 'hello']);
console.log(output); // --> 4