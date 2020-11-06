class GraphNode {
  constructor(val) {
    this.val = val;
    this.visited = false;
    this.children = [];
  }
}

// The Graph class is used because, unlike in a tree, you can't 
// necessarily reach all the nodes from a single node.
class Graph {
  constructor() {
    this.root = null;
  }
}