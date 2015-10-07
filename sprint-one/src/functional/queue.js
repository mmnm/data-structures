var Queue = function() {
  var someInstance = {};
  var front = 0;
  var rear = 0;


  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[rear++] = value;
  };

  someInstance.dequeue = function() {
    if (front >= rear) {
    } else {
      return storage[front++];
    }
  };

  someInstance.size = function() {
    return rear - front;
  };

  return someInstance;
};
