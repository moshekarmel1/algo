// Topological Sort a.k.a. Kahn's Algorithm
// Topological sorting only works for graphs that do not contain a cycle (acyclical)
// And we also need a starting node with zero dependencies
let graph = {
    'a': ['d'],
    'b': ['d'],
    'c': ['b'],
    'd': [],
}

let countIn = {};
for (let key in graph) {
    if (!countIn[key]) countIn[key] = 0;
    for (let val of graph[key]) {
        if (!countIn[val]) countIn[val] = 0;
        countIn[val]++;
    }
}

let queue = []; 
for (let key in countIn) {
    if (countIn[key] === 0) queue.push(key); // push keys that have nothing incoming 
}
while (queue.length > 0) {
    let val = queue.shift();
    console.log(val);
    for (let value of graph[val]) {
        countIn[value]--; // remove the val from the remaining dependencies
        if (countIn[value] === 0) queue.push(value); // continue to push keys that have nothing incoming 
    }
}

// logs a, c, b, d

