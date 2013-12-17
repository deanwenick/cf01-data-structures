//double linked list in JavaScript
//this lets us add and remove from the front or rear of list

//make prototype 'class'
var DLL = function() {
    this.head = null;
    this.tail = null;
    this.length = 0;
};

//we'll need to make new nodes easily
//is 'Node' a reserved word? got an error
var MyNode = function(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
};

//add node to front of list
DLL.prototype.prepend = function(data) {
    var node = new MyNode(data);
    if (this.head === null) {
        this.head = node;
        this.tail = node;
    } else {
        node.next = this.head;
        this.head = node;
        this.head.next.prev = node;
    }
    this.length++;
};

//add node to end of list
DLL.prototype.append = function(data) {
    var node = new MyNode(data);
    if (this.head === null) {
        this.head = node;
        this.tail = node;
    } else {
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
    }
    this.length++;
};


DLL.prototype.pop_front = function(callback) {
    var toReturn = this.head.data;
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
    callback(toReturn);
};

DLL.prototype.pop_back = function(callback) {
    var toReturn = this.tail.data;
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.length--;
    callback(toReturn);
};

//print function for info on popping
var message = function(data) {
    console.log(data);
};


var dll = new DLL();

//test
dll.prepend('world');
dll.prepend('hello');

dll.append('end');

dll.pop_front(message);
// >> hello

dll.pop_back(message);
// >> last

console.log(dll.head);
// >> { data: 'world', prev: null, next: null }
