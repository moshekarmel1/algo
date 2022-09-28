// Depth First Search (DFS)
let graph = {
    'a': ['e', 'c'],
    'b': ['c', 'd'],
    'c': [],
    'd': [],
    'e': ['b']
}

const dfs = (val) => {
    console.log(val);
    for (let elem of graph[val]) {
        dfs(elem);
    }
}
dfs('a')

// goes depth-first when searching meaning it'll follow the path all the way to the end (vertical) before moving horizontal
// logs a e b c d c