// Union Find a.k.a. Disjoint Sets can be used to check for mapping between values
// Imagine the graph below, how many distinct sections are their?
/*
    0 ---- 1   3
           |   |
           |   |
           2   4
*/
let n = 5; 
let edges = [[0,1],[1,2],[3,4]];

let arr = [];
for (let i = 0; i < n; i++) {
    arr[i] = i;
}

const union = (i, j) => {
    let a = find(i);
    let b = find(j);
    if (a !== b) {
        arr[b] = a;
    }
}

const find = (val) => {
    while (val !== arr[val]) {
        val = arr[val];
    }
    return val;
}

for (let [a, b] of edges) {
    union(a, b);
}

console.log(arr) // logs [0, 0, 0, 3, 3]

let distinct = arr.filter((val, i) => val === i).length;

console.log(distinct) // logs 2, there are 2 distinct parents