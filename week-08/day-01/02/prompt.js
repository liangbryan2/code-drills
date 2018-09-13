//  YOUR WORK HERE
function steps(num) {
    var string = "#";
    console.log(string);
    for (var i = 0; i < num-1; i++) {
        string += "##";
        console.log(string);
    }
}

steps(8);