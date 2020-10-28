class TreeNode {
  constructor(value) {
    this.val = value;
    this.parent = this.left = this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  add(value) {
    let node = new TreeNode(value);
    if (!this.root) {
      this.root = node;
    }
    else {
      let currParent = this.root,
        branch;
      while (currParent) {
        branch = value < currParent.val ? 'left' : 'right';
        // if the currParent[branch] is null, meaning that we hit the 
        // bottom of the tree on the appropriate side, then break out of the loop
        if (!currParent[branch]) {
          break;
        }

        currParent = currParent[branch];
      }
      // set the parent variable on the new Node 
      node.parent = currParent;
      currParent[branch] = node;
    }
  }
}