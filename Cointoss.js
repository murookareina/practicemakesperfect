/*
Coin Toss
Determine the possible permutations of n number of coin tosses. Use a tree!
Sides: Head, Tail

Example Input Tree:

                                C
                              /   \
                             H     T
                            /  \   /  \
                           H   T  H   T
*/

function coinTossPermutations(n, path, side) {
  if (side) {
    path.push(side);
  }
  if (n === 0) {
    path.pop();
    return path;
  }
  coinTossPermutations(n - 1, path, 'heads');
  coinTossPermutations(n - 1, path, 'tails');
  path.pop();
}
