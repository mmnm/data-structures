

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var cur = this._storage.get(index);
  if(cur != "undefined") {
    cur.push(v);
  }

  this._storage.set(index, cur);
/*
  var currentVal = this._storage.get(index);
  if (currentVal === undefined) {
    this._storage.set(index, v);
  } else {
    this._storage.set(index, [].concat(currentVal, v));
  }*/



};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
  
  var currentVal = this._storage.get(index);
  if (Array.isArray(currentVal)) {
    currentVal.indexOf('k')
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, null);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


