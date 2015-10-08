var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    var temp = new Node(value);
    if(list.tail !== null) {
      list.tail.next = temp;
      list.tail = temp;
    } else {
      list.tail = list.head = temp;
    }

  };

  list.removeHead = function() {
    if(list.head !== null) {
      var temp = list.head;
      if(list.head === list.tail) {
        list.head = null;
        list.tail = null;
        
      } else {
        list.head = list.head.next;
      }
      return temp.value;
    }
  };

  list.contains = function(target) {
    var temp = list.head;

    while(temp !== null) {
      if(temp.value === target) {
        return true;
      }

      temp = temp.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
