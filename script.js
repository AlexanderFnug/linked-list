const node1 = {
	prev: null,
  next: null,
  data: "A"
}
const node2 = {
    prev: null,
    next: null,
    data: "B"
  }
  
  const node3 = {
    prev: null,
    next: null,
    data: "E"
  }
class LinkedList {
  constructor() {
      // test-code: change later
      this.head = node1;
  this.tail = node3;
  }

  dumpList() {
  let a_node = this.head;
  while (a_node != null) {
    console.log(`
    node: ${a_node.data}
    -----------
      prev: ${a_node.prev?.data}
      next: ${a_node.next?.data}
    `);
    // find next node
    a_node = a_node.next;
  }
}
}

const ll = new LinkedList();
console.log(ll);

  
  node1.next = node2;
  node2.prev = node1;
  node2.next = node3;
  node3.prev = node2;

    // Adds a new node with the specified data to the end of the list
    function add(data) {
        const newNode = {
          data: data,
          prev: null,
          next: null,
        };
    
        if (this.tail === null) { // The list is empty
          this.head = this.tail = newNode;
        } else {
          this.tail.next = newNode;
          newNode.prev = this.tail;
          this.tail = newNode;
        }
      }

      // Tilføjer en ny node i starten af listen
  function addFirst(data) {
    const newNode = {
      data: data,
      prev: null,
      next: this.head,
    };

    if (this.head !== null) {
      this.head.prev = newNode;
    } else {
      // Hvis listen er tom, bliver den nye node også tail
      this.tail = newNode;
    }

    this.head = newNode;
  }

  function removeFirst() {
    if (!this.head) return; // Listen er tom

    if (this.head === this.tail) {
      // Der er kun én node i listen
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
  }

  function removeLast() {
    if (!this.tail) return; // Listen er tom

    if (this.head === this.tail) {
      // Der er kun én node i listen
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
  }

  function removeNode(data) {
    let current = this.head;

    while (current) {
      if (current.data === data) {
        if (current === this.head) {
          this.removeFirst();
        } else if (current === this.tail) {
          this.removeLast();
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }
        return;
      }
      current = current.next;
    }
  }
 