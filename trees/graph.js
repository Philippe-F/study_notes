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

  addNode(val, parent = null) {
    let node = new GraphNode(val), seen = new Set();

    if (!this.root) {
      this.root = node;
    } else if (!parent) {
      this.root.children.push(node);
    } else {
      let queue = [...this.root.children];

      // BFS to find a node
      while (queue.length) {
        let vertex = queue.shift();

        if (!seen.has(vertex.val)) {
          if (vertex.val === parent) {
            vertex.children.push(node);
          } else {
            seen.add(vertex.val)
            queue.push(...vertex.children);
            break;
          }
        }
      }
    }
  }
}