// Longest substring



// This function takes in a string and returns the longest substring that doesn't
// contain repeated characters
function longestSubstring(str) {
  // -------------------- Your Code Here --------------------
  var substring = [];
  var current = [];
  for (var i = 0; i < str.length; i++) {
    if (current.includes(str[i])) {
      substring = current;
      current = [];
      current.push(str[i]);
    }
    if (!current.includes(str[i])) {
      current.push(str[i]);
    }
  }
  if (current.length < substring.length) {
    return substring.join('');
  }
  else {
    return current.join('');
  }



  // --------------------- End Code Area --------------------
}


// Export the longest substring for use by the testing function
module.exports = longestSubstring;
