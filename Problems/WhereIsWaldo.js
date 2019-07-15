/*
	Where's Waldo?

	Return the number of string permutations (a.k.a. rearranging all of letters) of SWALLOWED
	that contain the substring WALDO

	EXPECTED OUTPUT: 120

	Hint:  This obviously builds upon the StringPermutations problem.  Just be careful in this case
	       to check for repeated words, since SWALLOWED has multiple W's and L's!
*/

/*
Reina's thoughts

Things to keep track of:
	1. How many times we've seen the letters of WALDO as we go thru SWALLOWED
			Maybe an object that looks like:
				{'W': 1, 'A': 1, 'L': 1, 'D': 1, 'O', 1};
				{'S': 1, 'W': 2, 'A': 1, 'L': 2, 'O': 1, 'E': 1, 'D': 1}

	2. One possibility is to do all permutations of "SWALLOWED" and filter out the ones that contain the substring 'WALDO', returning the length.

*/

function whereIsWaldo(str) {
  let sum = 0;
  const map = {};
}

whereIsWaldo('SWALLOWED');
