// Fenwick Tree / Binary Indexed Tree is a way to keep track of running sums for an array of values
// the key benefit is that it allows you to calculates the sums in O(log n) time, instead of O(n)
// And it can handle updates to particular nodes and recalculate with ease
const SIZE = 1000;
const arr = [];
for (let i = 0; i < SIZE; i++) {
    arr[i] = i;
}
const fenwick = Array(SIZE + 1).fill(0)
// populate the fenwick tree for each value
arr.forEach((v, i) => calc(i, v, SIZE));
// now if we try to calculate the sum of the arr between 2 indices
let left = 5;
let right = 995;
// the normal way will take O(n)
console.log(normal(left, right)); // Logs: Call to normal sum took 0.7179999947547913 milliseconds
// but the fenwick approach will take O(log n)
console.log(fancyFenwick(left, right)); // Logs: Call to fancy Fenwick sum took 0.08280003070831299 milliseconds

function normal(l, r) {
    const startTime = performance.now();
    let sum = 0;
    for (let i = l; i <= r; i++) {
        sum += arr[i];
    }
    const endTime = performance.now();
    console.log(`Call to normal sum took ${endTime - startTime} milliseconds`);
    return sum;
}

function fancyFenwick(l, r) {
    const startTime = performance.now();
    let sum = getSum(r) - getSum(l - 1);
    const endTime = performance.now();
    console.log(`Call to fancy Fenwick sum took ${endTime - startTime} milliseconds`);
    return sum;
}
// calculate the binary indexed tree
function calc(i, val, len) {
    let j = i + 1;
    while (j <= len) {
        fenwick[j] += val;
        j += lsb(j);
    }
};
// gets the least significant bit from a number
function lsb(i) {
    return i & ~(i - 1);
};
// get the sum of a specific index
function getSum(i) {
    let j = i + 1;
    let sum = 0;
    while (j > 0) {
        sum += fenwick[j];
        j -= lsb(j);
    }
    return sum;
};
// fenwick can handle updates too and recalculate super efficiently
function update(index, val) {
    const diff = val - arr[index];
    arr[index] = val;
    calc(index, diff);
};

