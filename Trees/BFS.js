/*
Breadth First Search

Example input Tree:

         A
       /  \
      B    C
    / \   /  \
   D   E  F   G

*/

const bfs = root => {
  let queue = [root];
  let BFS = [];

  while (queue.length) {
    const curr = queue.shift();
    BFS.push(curr.value);
    if (curr.left) {
      queue.push(curr.left);
    }
    if (curr.right) {
      queue.push(curr.right);
    }
  }
  return BFS;
};
