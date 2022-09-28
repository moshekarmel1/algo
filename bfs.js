// Breadth First Search (BFS)
let graph = {
    'a': ['e', 'c'],
    'b': ['c', 'd'],
    'c': [],
    'd': [],
    'e': ['b']
}

let queue = ['a'];

while (queue.length) {
    let val = queue.shift();
    console.log(val);
    for (let elem of graph[val]) {
        queue.push(elem);
    }
}
// goes breadth-first when searching meaning horizontal before vertical
// logs a e c b c d