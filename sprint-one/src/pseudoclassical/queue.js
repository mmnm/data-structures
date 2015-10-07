var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.rear = 0;
  this.front = 0;

};

Queue.prototype = {
  constructor: Queue,

  enqueue: function(value) {
    this.storage[this.rear++] = value;
  },

  dequeue: function() {
    if (this.front >= this.rear) {
    } else {
      return this.storage[this.front++];
    }
  },

  size:  function() {
    return this.rear - this.front;
  }
};
