/*
Given a BST, find the longest path of unique nodes starting from the root node (the root counts as 1)

Example Input Tree:
                      16
                     / \
                  10    18
                 / \   /  \
                8  11  16  19

Output: [8, 10, 16, 18, 19]

*/

let maxPath = [];

const findMaxUniquePathInBST = (node, path) => {
  /** 1.  JUST LIKE YESTERDAY, FIRST WE THINK ABOUT WHEN THE RECURSION STOPS */
  if (!node) {
    // We are at the bottom of the tree, so we have just return
    return;
  }
  if (path.has(node.value)) {
    // We have found a repeated value, so this path is done and we just return
    return;
  }

  /** 2.  ONCE WE KNOW THAT WE CAN KEEP GOING, WE TAKE CARE OF THIS NODE FIRST */
  path.add(node.value);   // We add this node to the current path
  if (path.size > maxPath.length) {
    // If the current path is bigger than the max, we copy it to the max
    resetMaxPath(path);
  }

  /** 3.  NOW THAT THIS NODE IS DONE, WE RECURSE TO EACH OF OUR CHILDREN */
  findMaxUniquePathInBST(node.left, path);
  findMaxUniquePathInBST(node.right, path);
  
  /** 4.  THIS PART IS NEW; WE CLEAN UP AFTER OURSELVES BEFORE OUR PARENTS GET HOME! */
  path.delete(node.value);
}

/** THIS IS JUST A LITTLE HELPER FUNCTION TO COPY THE CURRENT PATH TO THE MAX PATH */
const resetMaxPath = (path) => {
  maxPath = [];
  for (let value of path.values()) {
    maxPath.push(value);
  }
};


// ========= TEST CODE
const testTree = {
  value: 16,
  left : {
    value: 10,
    left: {
      value: 8
    },
    right: {
      value: 11
    }
  },
  right: {
    value: 18,
    left: {
      value: 16
    },
    right: {
      value: 19
    }
  }
};

findMaxUniquePathInBST(testTree, new Set());
console.log(maxPath);
