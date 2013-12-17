// making a linked list


//create a new empty list
var LinkedList = function() {//removed formal parameters
    this.head = null;
};

//insert function
//track next element of nodes, if null we're at the head
LinkedList.prototype.insert = function(value) {
    if(this.head === null) {
        this.head = {data: value, next: null};
    } else {
        var temp = this.head;
        while(temp.next !== null) {
            temp = temp.next;
        }
        temp.next = {data: value, next: null};
    }
};

//delete function takes node to be removed as arg
LinkedList.prototype.remove = function(index){
    //deal with case of first in list
    if (index === 0){
        if(this.head.next === null){
            this.head = null;
        } else {
            this.head = this.head.next;
        }
    }
    var temp = this.head;

    //find link before link to be removed
    for(var i = index; i > 1; i--){
        temp = temp.next;
    }
    temp.next = temp.next.next;                 // Assignment that causes the deleted node to be bypassed in the list
};

//print function
LinkedList.prototype.print = function() {
    var temp = this.head;
    //deal with case of one node
    if (temp.next === null) {
        return temp.data;
    }
    else {//multiple nodes, put them in array
        output = [];
        while (temp.next) {
            output.push(temp.data);
            temp = temp.next;
            if (!temp.next) {
                output.push(temp.data);
            }
        }
        return output;
    }
};


//testing insert here
var ll = new LinkedList();
ll.insert("hello");
ll.insert("World");
ll.insert("!");
ll.insert("Whoo hoo!");
console.log(ll.data);
console.log(ll.head);
console.log("ll = " + ll.head);

