class GraphNode {
  constructor(val) {
    this.val = val;
    this.visited = false;
    this.children = [];
  }
}

class Graph {
  constructor() {
    this.root = null;
  }
}