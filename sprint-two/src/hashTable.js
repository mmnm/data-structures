

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.findIndexForKey = function(bucket, k) {
    var indexFound = -1;
    for (var i = 0; i < bucket.length; i += 2) { 
      if (bucket[i] === k) {
        indexFound = i;
        break;
      }
    }
    return indexFound;

  }
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket === undefined) {
    this._storage.set(index,[k,v]);
  } else {

    var indexFound = this.findIndexForKey(bucket, k);
    if(indexFound !== -1) {
      bucket[indexFound + 1] = v;
    } else {
      bucket.push(k,v);
    }

    this._storage.set(index,bucket);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  var indexFound = this.findIndexForKey(bucket, k);
  if(indexFound === -1) {
    return null;
  } else {
    return bucket[indexFound + 1];
  }
};



HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  var indexFound = this.findIndexForKey(bucket, k);
  if(indexFound !== -1) {
    bucket.splice(indexFound, 2);
  } 
  this._storage.set(index,bucket);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


