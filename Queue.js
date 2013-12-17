//queue data structure in JavaScript
//first-in, first-out
//add to rear only, remove from front only

var Queue = function() {
    this.head = null;
};

//add node to rear
Queue.prototype.enqueue = function(data) {
    if (this.head === null) {
        this.head = {data: data, next: null};
    } else {
        var temp = this.head;
        while (temp.next) {
            temp = temp.next;
        }
        temp.next = {data: data, next: null};
    }
    return;
};

//remove from rear
Queue.prototype.dequeue = function(callback) {
    var toReturn = this.head.data;
    var err;
    if (this.head === null) {
        err = 1;
    } else {
        err = null;
        this.head = this.head.next;
        callback(err, toReturn);
    }
    return;
};

//function to print results
var printMessage = function(err, value) {
    if (err) {
        return 'The queue is empty';
    } else {
        console.log(value);
    }
};

//test
q = new Queue();
q.enqueue(1);
q.enqueue(2);

//remove '1'
q.dequeue(printMessage);

//remove '2'
q.dequeue(print_out_data);
// >> 'the queue is empty'
