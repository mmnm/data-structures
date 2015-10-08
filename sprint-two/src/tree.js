var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  //if(this is undefined)
  //traverse this check if value is target , return true if true
  //for each of the child of this (array), call contains with the child name
  if(this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    if(this.children[i].contains(target)) {
      return true;
    }
  };
 return false;

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
