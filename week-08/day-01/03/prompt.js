//  YOUR WORK HERE

function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
}

function pyramid(num) {
    var string = "";
    for (var i = 0; i <= num - 1; i++) {
        string += " ";
    }
    string = string + "#" + string
    for (var i = 0; i < num; i++) {
        // console.log(string);
        string = setCharAt(string, num - i, "#");
        string = setCharAt(string, num + i, "#");
        console.log(string);
    }
}
pyramid(8);
// console.log(pyramid(3));