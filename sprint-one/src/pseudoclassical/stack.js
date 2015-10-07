var Stack = function() {
  this.storage = {};
  this.length = 0;
};

Stack.prototype = {
  constructor: Stack,
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
}
