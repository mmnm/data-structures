var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.length = 0;

  for (var method in stackMethods) {
    someInstance[method] = stackMethods[method];
  }

  return someInstance;
};

var stackMethods = {
  push: function(val) {
    this.storage[this.length++] = val;
  },
  pop: function() {
    if (this.length > 0) {
      return this.storage[--this.length];
    }
  },
  size: function() {
    return this.length;
  }
};
