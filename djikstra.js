// Dijkstra's algorithm is an algorithm for finding the shortest paths between nodes in a graph
// Initialize all points to Infinity and use a min priority queue / heap to go through the each shortest path 
/* Imagine a graph like this, to travel from node 0 to node 3...
 [0]--11->[1]
  |        |
  5        2
  |        |
 [2]--10->[3]
You'd want to travel 0 -> 1 -> 3 for a cost of 13
As opposed to        0 -> 2 -> 3 for a cost of 15
*/
let start = 0;
let end = 3;
let n = 4; // total of 4 nodes
let paths = [
    [0,1,11],
    [1,3,2],
    [0,2,5],
    [2,3,10]
];
// assume it take Infinity time for each path by default
let times = Array(n).fill(Infinity);
// create an adjacency list to represent the graph
let graph = {};
for (let [source, dest, weight] of paths) {
    if (!graph[source]) graph[source] = [];
    graph[source].push([dest, weight]);
}
// Create a Min Heap using Binary Search
let heap = [[start, 0]]; // start the queue with the start using wight 0 bec we're already there
const binSearchGetIndex = (val) => {
    if (heap.length === 0) return 0;
    if (heap.length === 1) return val > heap[0][1] ? 1 : 0;
    let low = 0;
    let high = heap.length - 1;
    while (low <= high) {
        let mid = (low + high) >> 1;
        if (val > heap[mid][1]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low;
}

times[start] = 0; // we're already at 0 so it doesn't take much time
while (heap.length > 0) {
    let [node, weight] = heap.shift();
    if (weight > times[node]) continue; // if this is heavier, forget it
    if (!graph[node]) continue;
    for (let [neighbor, neighborWeight] of graph[node]) {
        // if we have a higher value for this neighbor, lower it, and add to the queue
        if (times[neighbor] > weight + neighborWeight) {
            times[neighbor] = weight + neighborWeight;
            // use the binary search to maintain a heap in JS
            heap.splice(binSearchGetIndex(times[neighbor]), 0, [neighbor, times[neighbor]])
        }
    }
}

console.log(times[end]) // prints 13 which is the fastest path from node 0 -> node 3