var string = "ilovetowritecode";
var character = "o"

function distanceFrom(str, char) {
  // ===================== YOUR WORK HERE =====================
  var array = [];
  var distance = [];
  var locations = [];

  for (var i = 0; i < str.length; i++) {
    if (str[i] === char) {
      locations.push(i);
      // console.log(locations)
      // console.log(i)
    }
  }

  for (var i = 0; i < str.length; i++) {
    var arr = [];
    for (var j = 0; j < locations.length; j++) {
      arr.push(Math.abs(locations[j] - i))
    }
    array.push(arr);
  }

  for (var i = 0; i < array.length; i++) {
    distance.push(Math.min(...array[i]))
  }
return distance;
  // ==========================================================
}

console.log(distanceFrom(string, character))