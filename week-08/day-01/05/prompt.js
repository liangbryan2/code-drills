//  YOUR WORK HERE

function chunkify(array, num) {
    var chunks = [];
    var chunk = [];
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < num; j++) {
            if (array[j]) {

                chunk.push(array[j]);
            }
            // console.log(array[j]);
        }
        array.splice(0, num);
        chunks.push(chunk);
        chunk = [];
        i = 0;
    }
    console.log(chunks);
    return chunks;
}

chunkify([2, 4, 7, 3, 1, 7, 9, 4, 8, 0, 4, 7, 9, 3, 5, 5, 6, 3, 2, 2, 2, 2, 1], 3);