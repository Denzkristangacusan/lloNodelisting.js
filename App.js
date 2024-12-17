/
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
    this.print();
  }

  
  print() {
    let current = this.head;
    let output = "";
    while (current) {
      output += `${current.value} -> `;
      current = current.next;
    }
    output += "null";
    console.log(output);
  }
}

const linkedList = new LinkedList();
linkedList.append("Data Structures-Array");
linkedList.append("Variable Type-Integer");
linkedList.append("Sorting Algorithm-Bubble Sort");
