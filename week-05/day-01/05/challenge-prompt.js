// Activity 5


// The `checkTriangle` function should take in one array of strings and
// find the strings that are repeated within the argument. Return a new
// array containing the repeated strings in alphabetical order.



// ----------------------------------------------------------
//                        Repeated Words
// ----------------------------------------------------------
function checkTriange(arr) {
  // -------------------- Your Code Here --------------------
var a = arr[0];
var b = arr[1];
var c = arr[2];
var triangle = [];
if (a === b && a === c && b === c) {
  triangle.push('Equilateral Triangle');
  }
if (a === b || b === c || a === c) {
  triangle.push('Isosceles Triangle');
}
else {
  triangle.push('Scalene Triangle');
}

return triangle;


  // --------------------- End Code Area --------------------
}




// --------------------------- Test Cases ---------------------------
//
//
// ---------------------------- Test 01 -----------------------------
var testarr1 = [4,4,4];
$("#output-area").append(`
  <div class="card m-3">
    <div class="card-header bg-secondary">
      <h5 class="text-light">Test 01</h5>
    </div>
    <div class="card-body">
      <p class="text-left">The following should be [Equilateral Triangle,Isosceles Triangle]</p>
      <hr class="mb-5">
      <p class="text-left">[${checkTriange(testarr1)}]</p> 
    </div>
  </div>
`)

// ---------------------------- Test 02 -----------------------------
var testarr2 = [2,6,9];
$("#output-area").append(`
  <div class="card m-3">
    <div class="card-header bg-secondary">
      <h5 class="text-light">Test 02</h5>
    </div>
    <div class="card-body">
      <p class="text-left">The following should be "Scalene Triangle"</p>
      <hr class="mb-5">
      <p class="text-left">"${checkTriange(testarr2)}"</p> 
    </div>
  </div>
`)

// ---------------------------- Test 03 -----------------------------
var testarr3 = [4,4,11];
$("#output-area").append(`
  <div class="card m-3">
    <div class="card-header bg-secondary">
      <h5 class="text-light">Test 03</h5>
    </div>
    <div class="card-body">
      <p class="text-left">The following should be "Isosceles Triangle"</p>
      <hr class="mb-5">
      <p class="text-left">"${checkTriange(testarr3)}"</p> 
    </div>
  </div>
`)
