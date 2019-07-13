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

const maxLevel = {level: 0}

const uniqueValue = (root) => {
  let output = [];
  let seen = new Set();
  if (!root) {
    return 0;
  }
  uniqueValue(root.left, level + 1, maxLevel)
  if (!seen.has(root.value) {
    seen.add(root.value);
  }


  output.push(root);




  return output;
}
