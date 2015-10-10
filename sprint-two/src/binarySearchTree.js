var BinarySearchTree = function(value) {
  var _root = {'value': value, left: null, right: null};

  for (method in BinarySearchTreeMethods) {
    _root[method] = BinarySearchTreeMethods[method];
  }

  return _root;
};

BinarySearchTreeMethods = {};
BinarySearchTreeMethods.insert = function(value) {
  var cur = this;
  if(cur.value === null) {
    cur.value = value;
    return;
  } else {
    while(cur !== null) {
      if(cur.value > value) {
        if (cur.left === null) {
          cur.left = BinarySearchTree(value);
          return;
        } else {
          cur = cur.left;
        }
      } else {
        if (cur.right === null) {
          cur.right = BinarySearchTree(value);
          return;
        } else {
          cur = cur.right;  
        }
        
      }
    }
  }

};
BinarySearchTreeMethods.contains = function(value) {
  var cur = this;
  if (cur === null) {
    return false;
  } else {
    while (cur !== null) {
      if (cur.value === value) {
        return true;
      } else if (cur.value > value) {
        cur = cur.left;
      } else {
        cur = cur.right;
      }
    }
  }
  return false;
};
BinarySearchTreeMethods.depthFirstLog = function(callback) {

  var cur = this;
  if(cur === null) {
    return;
  }

  callback(cur.value);
  if(cur.left) {
    cur.left.depthFirstLog(callback);
  }
  if(cur.right) {
    cur.right.depthFirstLog(callback);
  }

};


/*

BinarySearchTreeMethods.depthFirstLog - O(n)
BinarySearchTreeMethods.contains - O


 * Complexity: What is the time complexity of the above functions?
 */
