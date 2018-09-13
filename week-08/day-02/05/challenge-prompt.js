// Spiral iteration through a matrix


// This function takes in a `m` x `n` matrix represented as an array 
// of `m` sub-arrays, each of which contain `n` elements and returns
// all the elements of the matrix starting with the element in the
// top left and clockwise spiraling inward
function spiralIter(matrix) {
  // -------------------- Your Code Here --------------------
  var result = [];
  while (matrix.length > 1) {
    result = result.concat(matrix.splice(0, 1)[0]);
    for (var index in matrix) {
      result.push(matrix[index].splice(-1)[0]);
    }
    result = result.concat(matrix.splice(-1, 1)[0].reverse());
    for (var i = matrix.length - 1; i >= 0; i--) {
      result.push(matrix[i].splice(0, 1)[0]);
    }
  }

  if (matrix.length > 0) {
    result.push(matrix.pop()[0]);
  }

  return result;
  // -------------------- End Code Area ---------------------
}

var matrix = [[ 1,  2,  3,  4,  5],
              [16, 17, 18, 19,  6],
              [15, 24, 25, 20,  7],
              [14, 23, 22, 21,  8],
              [13, 12, 11, 10,  9]];

console.log(spiralIter(matrix));
// This export is for testing the function
module.exports = spiralIter;