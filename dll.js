// Double Linked List can be used to have O(1) lookups within a sequence 
// Each node has a pointer to the next & prev Node, and the DLL has a tail & head
class Node {
    constructor (val, next, prev) {
        this.val = val;
        this.next = next || null;
        this.prev = prev || null;
    }
}
class DLL {
    constructor () {
        this.head = null;
        this.tail = null;
    }

    isEmpty() {
        return this.head === null && this.tail === null;
    }

    insertAtHead(val) {
        let newNode = new Node(val, this.head);
        if (this.head) this.head.prev = newNode;
        else this.tail = newNode;
        this.head = newNode;
    }

    insertAtTail(val) {
        let newNode = new Node(val, null, this.tail);
        if (this.tail) this.tail.next = newNode;
        else this.head = newNode;
        this.tail = newNode;
    }

    insertAfter(node, val) {
        if (!node) return;
        let newNode = new Node(val, node.next, node);
        if (node.next) node.next.prev = newNode;
        else this.tail = newNode;
        node.next = newNode;
    }

    insert(pos, newNodeVal) {
        // 1. empty
        if (this.isEmpty()) {
            let newNode = new Node(newNodeVal);
            this.head = newNode;
            this.tail = newNode;
        } else if (pos !== this.tail && pos !== this.head) {
            // 2. In the middle (not tail or head)
            // A -> B -> C -> D
            // A <- B <- C <- D
            // assuming that pos is a reference to the prior Node
            this.insertAfter(pos, newNodeVal);
        } else if (pos === this.tail) {
            // 3. end
            this.insertAtTail(newNodeVal);
        } else if (pos === this.head) {
            // 4. beginning
            this.insertAtHead(newNodeVal);
        }
    }
}

let dll = new DLL();
dll.insert(null, 1);
dll.insert(dll.head, 2);
dll.insert(dll.tail.prev, 3);
dll.insert(dll.head.next, 4);
dll.insert(dll.head, 5);
while (dll.head != null) {
    console.log(dll.head.val);
    dll.head = dll.head.next;
}