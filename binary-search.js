// Binary Search cuts the time in half on each pass for a sorted list
let arr = [];
for (let i = 0; i < 100000; i++) {
    arr.push(i);
}

const binSearch = (val) => {
    var startTime = performance.now();
    let low = 0;
    let high = arr.length - 1;
    let hasValue = false;
    while (low <= high) {
        let mid = (low + high) >> 1;
        if (val === arr[mid]) {
            hasValue = true;
            break;
        }
        if (val > arr[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    var endTime = performance.now();
    console.log(`Call to binSearch took ${endTime - startTime} milliseconds`)
    return hasValue;
}

const normalSearch = (val) => {
    var startTime = performance.now();
    let hasValue = false;
    for (let i = 0; i < arr.length; i++) {
        if (i === val) {
            hasValue = true;
            break;
        }
    }
    var endTime = performance.now();
    console.log(`Call to normalSearch took ${endTime - startTime} milliseconds`);
    return hasValue;
}

console.log(binSearch(75678)) // true - Call to binSearch took 0 milliseconds

console.log(normalSearch(75678)) // true - Call to normalSearch took 3.900000000372529 milliseconds