class TreeNode {
  constructor(value) {
    this.val = value;
    // remove parent
    this.parent = this.left = this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  // change to insert
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
      // node.parent = currParent;
      currParent[branch] = node;
    }
  }
}

// Create a tree
function createTree(tree, arr) {
  if (arr.length === 0) return tree;
  createTree(tree, arr.slice(0, arr.length - 1))
  add(tree, arr[arr.length - 1])
  return tree
}

// add a node without a Tree class
function add(tree, value) {
  let node = new TreeNode(value);

  if (!tree.root) {
    tree.root = node;
  } else {
    let currParent = tree.root,
      branch;

    while (currParent) {
      branch = value < currParent.val ? 'left' : 'right';

      if (!currParent[branch]) {
        break;
      }

      currParent = currParent[branch];
    }

    node.parent = currParent;
    currParent[branch] = node;
    return tree
  }

  return tree;
};

// DFS Recursive
function dfs(tree, stack = []) {
  if (!stack.length) tree = tree.root;
  if (!tree) return;
  stack.push(tree.val);
  dfs(tree.left, stack);
  dfs(tree.right, stack);
  console.log(stack.pop());
}

// BFS Iterative 
function bfs(tree) {
  tree = tree.root
  let queue = [tree];
  while (queue.length) {
    let node = queue.shift();

    console.log(node.val);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}