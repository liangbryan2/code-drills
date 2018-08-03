$(document).ready(function () {
    //In each instance, write your code directly below the question asking for it. 


    //1. create a variable called text and have it equal an empty string
    var text = '';
    //2. create a function called randomizingText
    function randomizingText() {
        //3. create a variable called possibleLetters set to a string containing the whole alphabet. For example possibleLetters = "ABCD..."
        var possibleLetters = "abcdefghijlmnopqrstuvwxyz";
        // 4. The text variable will continue to grow in length as the user clicks the question mark. Reassign the text variable to itself plus a new random letter. You will need to use the possibleLetters variable to accomplish this. Research the charAt() method if you're stuck.
        text = text + possibleLetters.charAt(Math.floor(Math.random() * possibleLetters.length));
        //5. Finally have this function return the current value of the text variable
        return text;
    }
    $(".jumbotron").on("click", "#randomLetter", function () {


        // console.log the function randomizingText (don't forget to invoke the function)
        console.log(randomizingText());
        // append the text variable to the h1 tag with the id of letters
        $("#letters").append(text);

    });

});