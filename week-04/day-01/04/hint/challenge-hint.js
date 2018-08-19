// Activity 4


// We are creating a function that takes in an unsorted array of integers
// and returns a sorted array with all the even numbers first in ascending order
// and all the odd numbers in descending order after the even numbers

// -------------------------------------------------------
//                Helper Functions (Optional)
//
// -------------------- Your Code Here --------------------

// write a helper function for swapping two elements within an array
function swap(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}


// Write a sort function to sort an array in ascending order using our
// element swapper helper function
function ascending(arr) {
  var sorted = false;
  if (!sorted) {
    for (var i = 0; i < arr.length - 1; i++) {
      for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          swap(arr, i, j);
        } else {
          sorted = true;
        }
      }
    }
  }
  return arr;
}


// Write a sort function to sort an array in descending order using our
// element swapper helper function
function descending(arr) {
  var sorted = false;
  if (!sorted) {
    for (var i = 0; i < arr.length - 1; i++) {
      for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
          swap(arr, i, j);
        } else {
          sorted = true;
        }
      }
    }
  }
  return arr;
}




// --------------------- End Code Area --------------------



// -------------------------------------------------------
//                        Sort Function
// -------------------------------------------------------
function upDownSort(arr) {
  // -------------------- Your Code Here --------------------

  // seperate out the even and odd numbers into two arrays;
  var even = [];
  var odd = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }


  // sort the even array in ascending order
  even = ascending(even);


  // sort the odd array in descending order
  odd = descending(odd);


  // concatenate the odd array to the back of the even array and
  // return the result
  return arr = even.concat(odd);



  // --------------------- End Code Area --------------------
}


// ------------------------------------------------------------------
console.log("==================== Test 01 ====================");
var testArr1 = [5, 32, 9, 47, 22, 6, 33, 17, 20, 73];
console.log("The following should be [6, 20, 22, 32, 73, 47, 33, 17, 9, 5]");
console.log(upDownSort(testArr1));

// ------------------------------------------------------------------
console.log("==================== Test 02 ====================");
var testArr2 = [44, 32, 6, 88, 12, 28, 20, 8, 10, 24];
console.log("The following should be [6, 8, 10, 12, 20, 24, 28, 32, 44, 88]");
console.log(upDownSort(testArr2));

// ------------------------------------------------------------------
console.log("==================== Test 03 ====================");
var testArr3 = [19, 27, 11, 23, 7, 63, 89, 15, 33, 3];
console.log("The following should be [89, 63, 33, 27, 23, 19, 15, 11, 7, 3]");
console.log(upDownSort(testArr3));