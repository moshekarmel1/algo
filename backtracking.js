// Backtracking is useful for generating all permutations of a thing
// e.g. generate **unique** arrays of length k, when given an array of size n

const n = 4;
const k = 3;
const results = [];

const generate = (start, arr) => {
    if (arr.length === k) {
        results.push([...arr]); // add a copy
        return;
    }

    for (let i = start; i <= n; i++) {
        arr.push(i);
        generate(i + 1, arr);
        arr.pop(); // remove last elem
    }
}

generate(1, []);
console.log(results); // logs [ [ 1, 2, 3 ], [ 1, 2, 4 ], [ 1, 3, 4 ], [ 2, 3, 4 ] ]