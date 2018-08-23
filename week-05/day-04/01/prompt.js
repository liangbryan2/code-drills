
function fizzBuzz(n) {
// ===================== YOUR WORK HERE =====================
    if (n % 3 === 0 && n % 5 === 0) {
        console.log('fizzbuzz');
    }
    else if (n % 3 === 0) {
        console.log('fizz');
    }
    else if (n % 5 === 0) {
        console.log("buzz");
    }


// ==========================================================
  
}

fizzBuzz(process.argv[2])

