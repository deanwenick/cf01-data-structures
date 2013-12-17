//create a stack structure in JavaScript
//basically an array, last-in, first-out
//add, delete and print functionality

//function as class like object
var Stack = function() {
    this.head = null;
};

//function for making new nodes in stack
var MyNode = function(data) {
    this.next = null;
    this.data = data;
};

//add to stack
Stack.prototype.push = function(data) {
    if (this.head === null){
        new_node = new MyNode(data);
        this.head = new_node;
    }else{
        new_node = new MyNode(data);
        new_node.next = this.head;
        this.head = new_node;
    }
};

//remove from stack
Stack.prototype.pop = function(callback) {
    var err;
    if (this.head === null){
        err = "Underflow";
        callback(err, null);
    }else{
        var output = this.head.data;
        err = null;
        new_head = this.head.next;
        this.head.next = null;
        this.head = new_head;
        callback(err, output);
    }
};

//print out status of pop
var callback = function(err, value) {
    if (err) {
        console.log("Underflow");
    } else {
        console.log(value);
    }
};


//test
var s = new Stack();
s.push(9);
s.push(19);
s.push(99);


