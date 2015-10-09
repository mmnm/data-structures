

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
    var status = false;
    for (var i = 0; i < bucket.length; i += 2) {
      if (bucket[i] === k) {
        status = true;
        bucket[i + 1] = v;
      }
    }
    if(!status) {
      bucket.push(k,v);
    }
    this._storage.set(index,bucket);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i += 2) { 
    if (bucket[i] === k) {
      return bucket[i + 1];
    }
  }
  return null;
};



HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i += 2) {
    if (bucket[i] === k) {
      bucket.splice(i,2);
      break;
    }
  }
  this._storage.set(index,bucket);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


