//  YOUR WORK HERE

function addDigits(num) {
    var numArray = num.toString().split("");
    var sum = 0;
    for (var i = 0; i < numArray.length; i++) {
        sum += parseInt(numArray[i]);
    }
    if (sum.toString().split("").length === 1) {
        console.log(sum);
        return sum;
    }
    else {
        addDigits(sum);
    }
}

addDigits(644);
addDigits(42);
addDigits(89657);