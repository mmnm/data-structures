

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.GraphEdgeInfo = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i] === node) {
      return true;
    }
  }
  return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if(this.nodes[i] === node) {
      this.nodes.splice(i, 1);
    }
  };
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.GraphEdgeInfo[fromNode+','+toNode] === true) {
    return true;
  } else {
    return false;
  }
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.GraphEdgeInfo[fromNode+','+toNode] = true;
  this.GraphEdgeInfo[toNode+','+fromNode] = true;

  //for fromNode to ToNode always create an edge
  //

};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.GraphEdgeInfo[fromNode+','+toNode] = false;
  this.GraphEdgeInfo[toNode+','+fromNode] = false;
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i]);
  };
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


