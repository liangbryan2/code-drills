// Day 02
// Activity 5


// This function takes in two strings and checks whether they're anagrams of each other.
// Return true if they are anagrams and false if they aren't anagrams.
function anagramCheck (str1, str2) {

  // ---------- Your Code Here ----------

  // remove all the white space from both strings
  var str1nospace = str1.replace(/ /g, '');
  var str2nospace = str2.replace(/ /g, '');
  // if the two strings aren't equal in length without white space, then they can't
  // be anagrams of each other
  if (str1nospace.length !== str2nospace.length) {
    return false;
  }
  

  // convert both strings to lowercase to remove case sensitivity from our logic
  str1nospace = str1nospace.toLowerCase();
  str2nospace = str2nospace.toLowerCase();
  
  array = str2nospace.split("");
  // iterate through the first string
  for (var i = 0; i < str1nospace.length; i++) {
  
    // replace the first instance of the current character inside the second string
    // with an empty string. We are essentially subtracting characters contained within
    // the first string from the second string
    var letter = str1nospace[i];
    // console.log(letter);
    var firstInstance = array.indexOf(letter);
    array[firstInstance] = "";

  }
  // Once we've finished our iteration through the first string, if the second string 
  // is empty, then it and the first string are composed of the same characters. If 
  // there was a difference, then the replace method wouldn't have found a character 
  // and the second string would still have characters inside it. We already checked 
  // to make sure the two strings are the same length, so we don't have to worry about 
  // the first string containing extra letters.
  str2nospace = array.join("");
  if (str2nospace === "") {
    console.log("This is blank" + str2nospace + " !")
    return true;
  }
  
  else {
    return false;
  }

  // ----------- End Code Area -----------

}

// This should console log true
console.log(anagramCheck("I am Lord Voldemort", "Tom Marvolo Riddle"));

// This should console log true
console.log(anagramCheck("Astronomer", "Moon Starer"));

// This should console log false
console.log(anagramCheck("Hello World", "Llero Wod"));

// This should console log false
console.log(anagramCheck("Supercalifragilisticexpialidocious", "If you say it loud enough"));
