// Merging Sorted Arrays



// The `mergeSorted` function takes in two sorted arrays and returns a new 
// sorted array containing all the elements of the two argument arrays
function mergeSorted(arr1, arr2) {
  // -------------------- Your Code Here --------------------
  var index1 = 0;
  var index2 = 0;
  var mergedArr = [];
  while (index1 <= arr1.length - 1 && index2 <= arr2.length - 1) {
    if (arr1[index1] < arr2[index2]) {
      mergedArr.push(arr1[index1]);
      index1++;
    } else {
      mergedArr.push(arr2[index2]);
      index2++;
    }
  }

  if (index1 > arr1.length - 1 && index2 <= arr2.length - 1) {
    mergedArr = mergedArr.concat(arr2.slice(index2));
  }
  if (index2 > arr2.length - 1 && index1 <= arr1.length - 1) {
    mergedArr = mergedArr.concat(arr1.slice(index1));
  }

  return mergedArr;




  // --------------------- End Code Area --------------------
}

// Export the `mergegSorted` 
module.exports = mergeSorted;