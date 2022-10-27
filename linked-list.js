// a linked list is a data structure where each element has a pointer to the next one
// you can create one using a reduce, and loop using while

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const arr = [5, 4, 3, 2, 1]
// create linked list
let linkedList = arr.reduce((a, b) => new ListNode(b, a), null);
console.log(linkedList); // logs ListNode {val: 1, next: ListNode}
// loop through linked list
const temp = [];
while (linkedList) {
    temp.push(linkedList.val);
    linkedList = linkedList.next;
}
console.log(temp); // logs [1, 2, 3, 4, 5]