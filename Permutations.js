// OK, so now let's see how we can expand the coin-toss problem to more general permutations...
// I'm hoping that this will really open up your mind to how "simple" permutation problems can be.  :)

// OK, so let's start with our cointoss code:

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

// I'm somewhat sloppy by nature, but I like to keep my code neat and DRY
// Notice the repitition above?  I think you pointed it the other morning as well.
// We're pushing each side, calling ourselves, and then popping it off before trying the next side.
// The only difference between lines 16-18 and 20-23 is the 'H' vs 'T':  the possibility we're trying.

// So let's try to make our function a little neater...by including our own, custom side names!
// (For example, instead of ['H', 'T'], sideNames can be ['0', '1']  ... oooohhh binary fun)

// The point is that our function doesn't really care what we call the sides, so why hard code it?

function logAllCustomSequences(numberLeft, doneSoFar, possibiliities) {
	if (numberLeft === 0) {
		console.log(doneSoFar);
  	return;
	}

	// So instead of typing it out twice for each side, we can tighten this up with a loop
	for (let possibility of possibiliities) {
		doneSoFar.push(possibility);
	 	logAllCustomSequences(numberLeft-1, doneSoFar, possibiliities);
	 	doneSoFar.pop();
	}
}

// Not bad, right?  Let's see if it works (this is when you're supposed to run it yourself)!
logAllCustomSequences(5, [], ['H', 'T']);

// OK, it worked like a charm, and for all sorts of side names...
console.log("======== BINARY TIME!! ============");
logAllCustomSequences(5, [], ['0', '1']);


// OK cool, so now for the cool part.  Now that we've converted our function to loop through all 
// of the (2) possibiliities of a coin flip, which are stored in an array, what's stopping us from
// simply making that array of possibilities bigger for things like dice??

// The answer is..........

// NOTHING!
console.log("=========== DICE???!! WHHHHAAAAAATTTT???? ============");
logAllCustomSequences(3, [], [1, 2, 3, 4, 5, 6]);  // 3 rolls of a die  :)


// So yeah, that's why I dropped all coin-related terminology from the logAllCustomSequences function.
// Now this relatively simple function can literally enumerate all permutations for any repeatable
// event:  coin flips, dice rolls, picking a number from 1 to 10, etc.

// It also works for doing silly things like trying to ATM pins...
console.log("== AH OK, SO THIS IS WHY THE LOCK MY ACCOUNT AFTER 3 FAILED ATTEMPTS... ==");
logAllCustomSequences(4, [], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

// Or for all possible sequences of notes on a violin...
console.log("==== ONE OF THESE IS BOUND TO BE OK, I GUESS... ====");
logAllCustomSequences(4, [], ['A', 'B', 'C', 'D', 'E', 'F', 'G']);


