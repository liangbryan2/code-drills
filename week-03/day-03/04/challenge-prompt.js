// build a function that uses bubble sort to sort an array from
// highest value to lowest value and returns the new sorted array

function bubbleSort(arr) {
    // ================= code goes here ===========================
    var sorted = false;
    var holder;
    if (!sorted) {
        for (var i = 0; i < arr.length - 1; i++) {
            for (var j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    holder = arr[i];
                    arr[i] = arr[j];
                    arr[j] = holder;
                } else {
                    sorted = true;
                }
            }
        }
    }
    return arr;
}
// ============================================================

var testArray = [34, 23, 3, 76, 20, 84, 18, 9];
testArray = bubbleSort(testArray);
console.log(testArray);