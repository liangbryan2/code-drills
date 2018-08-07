// Day 01
// Acitivity 03


console.log("==================== Question 01 ====================");
// Create a timer that creates an alert that says "Question 1" after 5 seconds
setTimeout(() => {
    alert("Question 1");
}, 5000);


console.log("==================== Question 02 ====================");
// Create a timer that creates an alert that says "Question 2" after 15 seconds
var clear = setTimeout(() => {
    alert("Question 2");
}, 15000);


// Remove the timer you just made for Question 2
clearTimeout(clear);


console.log("==================== Question 03 ====================");
// Create a timer that creates an alert that says "Question 3 part 1" after 15 seconds
var josh = setTimeout(() => {
    alert("Question 3 part 1");
}, 15000);


// Create a timer that creates an alert that says "Question 3 part 2" after 16 seconds
setTimeout(() => {
    alert("Question 3 part 1");
}, 16000);


console.log("==================== Question 04 ====================");
// Remove the timer from Question 3 part 1
clearTimeout(josh);


console.log("==================== Question 05 ====================");
// Create a timer that plays a sound after 11 seconds and console logs "Question 5 Completed!"
setTimeout(() => {
    console.log("Question 5 complete");
    var audio = document.getElementById("audio");
    audio.play();
}, 11000);

