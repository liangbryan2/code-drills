// First Three Function


// The `firstThree` function will console log "Hello, I have been run X times"
// where `X` is the number of times it's been run so far; then it will return 
// true. after it has been run 3 times, subsequent invocations of this function 
// will not console log anything and return false.
//
// -------------------- Your Code Here --------------------

function test() {
    var times = 0;
    return function () {
        times++;
        if (times <= 3) {
            console.log(`I've been run ${times} times.`);
            return true;
        } else {
            return false;
        }
    };
};
var firstThree = test();
// -------------------- End Code Area ---------------------


console.log(firstThree())
console.log(firstThree())
console.log(firstThree())
console.log(firstThree())
console.log(firstThree())