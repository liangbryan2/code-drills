//  YOUR WORK HERE
var points = 0;

function productivity(array, id) {
    var minion = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i][0] === id) {
            minion = array[i];
        }
    }
    points += minion[1];
    // console.log(points);
    for (var i = 0; i < minion[2].length; i++) {
        productivity(array, minion[2][i]);
    }
    return points;
}

// productivity([[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1);

console.log(productivity([[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1));