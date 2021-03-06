//min heap data structure in JavaScript
//each node will be smaller value than parent node
//keep smallest node in position 1, not 0, like array (eloquent JavaScript)
//array based min heap, child nodes are calculated at array indices 2n and 2n+1
//parent nodes calculated by index/2
/*
** @TODO most of insert function should be moved to seperate 
** function to be reused in remove
*/

//create 'class'
var HeapMin = function() {
    this.heap = [];
};

//insert function
//if new heap put data in first position
HeapMin.prototype.insert = function(data) {
    if (this.heap.length === 0) {
        this.heap[0] = null;//see above
        this.heap[1] = data;

    } else {

        this.heap.push(data);
        //temp index to keep track of where we are
        var tempIndex = this.heap.indexOf(data);

        //keep checking that new data is less than previous node
        while (data < this.heap[Math.floor(tempIndex/2)]) {
            
            //swap with parent
            this.heap[tempIndex] = this.heap[Math.floor(tempIndex/2)];
            this.heap[Math.floor(tempIndex/2)] = data;

            tempIndex = this.heap.indexOf(data);
        }
    }
};

//remove function - remove any node
HeapMin.prototype.remove = function(data) {
    //find position of data in heap
    //check nodes below and move them up

    var dataPos = this.heap.indexOf(data);
    var parentPos = Math.floor(dataPos/2);

    console.log("targetData is %s", this.heap[parentPos]);

    if (this.heap[parentPos] < this.heap[dataPos]) {
        console.log(data + " is more than " + this.heap[parentPos]);
    } else {
        console.log("%s is less than %s", data, this.heap[parentPos]);
    }

};

//find size of heap
HeapMin.prototype.size = function() {
    return this.heap.length;
};

HeapMin.prototype.peak = function() {
    return this.heap[1];
};

//test
//very primitive functionality
var hm = new HeapMin();
hm.insert(11);
hm.insert(2);
hm.insert(33);
hm.insert(4);
hm.insert(55);
hm.insert(6);
hm.insert(3);

console.log(hm.heap);
console.log(hm.peak());