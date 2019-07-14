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


// JOHN'S TURN  :)

/** 
*    OK, so I'm going to refactor/rename juuust a bit to better hammer home the ideas... 
*    
*    I know that this may be confusing at first, but this is a slightly different way of doing the recursion.
*    That said, it's important to see why this works as well.  In this version, each pair of coin-flip possibilities
*    is handled by the parent first, and then the children are called.
*
*    So in a some ways this is simpler:  each iteration only knows about how many flips are left and which have been 
*    done so far.  On the flip side, there's a little more "bookkeeping" being done per iteration (notice the push-call-pop pattern for each flip)
*
*/
function logAllCoinFlipSequences(numberOfFlipsLeft, flipsDoneSoFar) {
  // 1.  WHEN WE'RE DONE WITH THE RECURSION
  if (numberOfFlipsLeft === 0) {
    //  We're done flipping, so we simply log all of our flips done so far.
    console.log(flipsDoneSoFar);
    return;
  }

  // 2.  WE'RE NOT DONE, SO WE "KICK-OFF" OUR CHILDREN BY TRYING BOTH SIDES OF THE COIN
  // First we try heads and recurse...
  flipsDoneSoFar.push('H');
  logAllCoinFlipSequences(numberOfFlipsLeft-1, flipsDoneSoFar);
  flipsDoneSoFar.pop();
  
  // Next we try tails and recurse...
  flipsDoneSoFar.push('T');
  logAllCoinFlipSequences(numberOfFlipsLeft-1, flipsDoneSoFar);
  flipsDoneSoFar.pop();
}


// ======  TESTING THIS METHOD
logAllCoinFlipSequences(5, []);
