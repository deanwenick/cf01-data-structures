//min heap data structure in JavaScript
//each node will be smaller value than parent node

//create 'class'
var HeapMin = function() {
    this.heap = [];
};

//insert function
//if new heap put data in first position
HeapMin.prototype.insert = function(data) {
    if (this.heap.length === 0) {
        this.heap[1] = data;

    } else {

        this.heap.push(data);
        //temp index to keep track of where we are
        var tempIndex = this.heap.indexOf(data);

        //keep checking that new data is less than previous node
        while (data < this.heap[Math.floor(tempIndex/2)]) {
            this.heap[tempIndex] = this.heap[Math.floor(tempIndex/2)];
            this.heap[Math.floor(tempIndex/2)] = data;
            tempIndex = this.heap.indexOf(data);
        }
    }
};

HeapMin.prototype.peak = function() {
    return this.heap[1];
};

//test
var hm = new HeapMin();
hm.insert(1);
hm.insert(2);
hm.insert(3);
hm.insert(4);
hm.insert(5);
hm.insert(6);
hm.insert(7);

console.log(hm.heap);
console.log(hm.peak());