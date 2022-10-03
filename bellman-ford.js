// Bellman-Ford algorithm is an algorithm for finding the shortest paths between nodes in a graph
// Initialize all points to Infinity and loop through everything to find the shortest path 
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
let copy = Array(n).fill(Infinity);
times[start] = 0; // start takes 0
// run the logic to choose the min val
for (let i = 0; i < n - 1; i++) {
    for (let [source, dest, weight] of paths) {
        times[dest] = Math.min(times[dest], copy[source] + weight);    
    }
    copy = [...times];
}

console.log(times[end]) // prints 13 which is the fastest path from node 0 -> node 3