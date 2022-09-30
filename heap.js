// Heap a.k.a. Priority Queue is basically just a list that stays sorted
// every time you add a value, the list stays sorted.
// Javascript doesn't have a native implementation but you can make one by using a binary search 
// and figuring out where to put each value prior to inserting it
let arr = [];
const binSearchGetIndex = (val) => {
    if (arr.length === 0) return 0;
    if (arr.length === 1) return val > arr[0] ? 1 : 0;
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = (low + high) >> 1;
        if (val > arr[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low;
}
const startTime = performance.now();
for (let i = 0; i < 2000; i++) {
    let rand = Math.floor(Math.random() * 20);
    let index = binSearchGetIndex(rand);
    arr.splice(index, 0, rand);
}
const endTime = performance.now();
console.log(`Heap approach took ${endTime - startTime} milliseconds`) // Heap approach took 2.5 milliseconds

console.log(arr); // arr will be sorted

// vs. doing a sort after each call will be significantly slower...
arr = [];
const sortStartTime = performance.now();
for (let i = 0; i < 2000; i++) {
    let rand = Math.floor(Math.random() * 20);
    arr.push(rand);
    arr.sort();
}
const sortEndTime = performance.now();
console.log(`Sort approach took ${sortEndTime - sortStartTime} milliseconds`) // Sort approach took 53 milliseconds