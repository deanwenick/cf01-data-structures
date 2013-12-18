//hash table implementation
//class to define:
//insert(key,value)
//-- Uses the key to insert the value into the data hash value. You should also keep track of the key and value so you can print off the list of the hash table.
//has(key)
//--Returns a boolean true if the key has been inserted into the hash table. Otherwise, return false.
//percentFull()
//--Returns a percentage of the hash table that's been used. The percentage fill is calculated as (# array positions filled) / (total # array positions).
//constructor(initialSize)
//--Your constructor should take an initial size of the backing array. Your constructor should handle negative values, 0, floating point, strings, etc. and raise an exception.
//---For your initial hash function, you should use the modulus operator with the array size. If the array was 10 elements, my hash would be n % 10, where n is some meaningful number related to my input.
/*function HashTable() {
    return {key: 'firstValue'};
}

HashTable.prototype.insert = function() {
       return {key: 'value'};
};

var hashTable = new HashTable();*/

/*
12-18 not finished, this was work done in class
*/

var HashTable = function(capacity, hashFn) {
    var _hash = this._hash = new Array(capacity);
    this._elementsInserted = 0;
    hashFn = hashFn || function(key, capacity) {
        return key % capacity;
    };
    this._hashFn = function(key) {
        return hashFn(key, _hash.length);
    };
};



HashTable.prototype.insert = function(key, value) {
    var data = {k:key, v: value};
    var index = this._hashFn(key);
    if (!this._hash[index]) {
        this._hash[index] = [];
    }

    var chain = this._hashFn[index];
    for (var i=0; i<chain.length; i++) {
        if (chain[i].key == key) {
            chain[i].value = value;
            return;
        }
        chain.push({k: key, v: value});
        this._elementsInserted ++;
    }
};

HashTable.prototype.has = function(key) {
    var index = this._hashFn(key);
    if (!this.hash[index]) {
        return false;
    }

    var chain = this._hash[index];
    for (var i=0; i<chain.length;i++) {
        if(chain[i].key == key)
            return true;
    }
    return false;
};

HashTable.prototype.percentFull = function() {
    var used = 0;
    for (var i=0; i<this.hash.length; i++) {
        if(this._hash[used] && this._hash > 0)
            used ++;
    }
    return used / this._hash.length;
};

HashTable.prototype.collisionFactor = function() {
    return this._elementsInserted / this._hash.length;
};