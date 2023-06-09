// In computer science, the prefix sum, cumulative sum, inclusive scan, or simply scan of a sequence of numbers 
// is a second sequence of numbers, the sums of prefixes (running totals) of the input sequence, e.g. 
// input numbers 1   2  3   4   5   6
// prefix sums   1   3  6   10  15  21

let arr = [ 10, 4, 16, 20 ];
let n = arr.length;
let prefixSum = new Array(n);
prefixSum[0] = arr[0];
// Adding present element
// with previous element
for (let i = 1; i < n; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i];
}

console.log(prefixSum); // logs [10, 14, 30, 50]

// as a bonus here's a suffix sum implementation as well
let suffixSum = new Array(n);
suffixSum[n - 1] = arr[n - 1];
// Adding present element
// with previous element
for (let i = n - 2; i >= 0; i--) {
    suffixSum[i] = suffixSum[i + 1] + arr[i];
}

console.log(suffixSum); // logs [50, 40, 36, 20]
