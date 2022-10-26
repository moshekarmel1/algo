// Tries a.k.a. Prefix Trees, can be used to look through a tree and see if a word exists
let words = [
    'app',
    'apple',
    'pizza'
]
// put the words into a prefix tree / trie
const trie = {};
for (let word of words) {
    let root = trie;
    for (let char of word) {
        if (!root[char]) {
            root[char] = {};
        }
        root = root[char];
    }
}
console.log(trie);

// check the tree to see if words exist
const has = (word) => {
    let root = trie;
    for (let char of word) {
        if (root[char]) {
            root = root[char];
        } else {
            return false;
        }
    }
    return true;
}

console.log(has('apple')); // true
console.log(has('applesauce')); // false