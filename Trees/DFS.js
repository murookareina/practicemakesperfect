/*
Depth First Traversal

Example Input Tree:

       1
     /  \
    2    3
   / \
  4   5


Inorder = Left, Root, Right => 4, 2, 5, 1, 3
Preorder = Root, Left, Right => 1, 2, 4, 6, 3
Postorder = Left, Right, Root => 4, 5, 2, 3, 1

*/

const inOrderTraversal = root => {
  let nodes = [];
  inOrderTraversal(root.left);
  nodes.push(root);
  inOrderTraversal(root.right);
  return nodes;
};

const preOrderTraversal = root => {
  let nodes = [];
  nodes.push(root);
  preOrderTraversal(root.left);
  preOrderTraversal(root.right);
};

const postOrderTraversal = root => {
  let nodes = [];
  postOrderTraversal(root.left);
  postOrderTraversal(root.right);
  nodes.push(root);
};
