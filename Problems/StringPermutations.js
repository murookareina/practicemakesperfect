/*
String Permutations
List all possible permutations of a given string in alphabetical order.

Example Input String:  GOAT

EXPECTED OUTPUT:

AGOT
AGTO
AOGT
AOTG
ATGO
ATOG
GAOT
GATO
GOAT
GOTA
GTAO
GTOA
OAGT
OATG
OGAT
OGTA
OTAG
OTGA
TAGO
TAOG
TGAO
TGOA
TOAG
TOGA

*/

// A hint: this is VERY similar to our sequences function in Permutations.js
//         The difference is that the "possibilities" array needs to change
//				 as we go down the tree.  But how and why?  Write it out, and hopefully you'll see.  :)

function allAlphabeticalPermutationsofString(string) {
  //storing the result!
  let result = [];

  //calling a helper function that'll help with the permutations and singular arrays
  getPermutations(string, []);

  //gotta sort the array and filter out the duplicates
  result = result.sort().filter((arr, i) => {
    return result.indexOf(arr) === i;
  });

  return console.log(result);

  function getPermutations(str, permutation) {
    //convert the string to an array to access prototype methods
    if (typeof str === 'string') {
      str = str.split('');
    }
    //if we've exhausted the string, we can push the permutation string into the array saved in the outer function.
    if (!str.length) {
      result.push(permutation.join(''));
    }

    //looping through the string!
    for (let i = 0; i < str.length; i++) {
      //let's 
      let letter = str.splice(i, 1);
      console.log('letter=======', letter);

      permutation.push(letter);
      console.log('permutation array before recursive call=====', permutation);
      getPermutations(str, permutation);
      console.log('permutation array post recursive call=====', permutation);

      permutation.pop();
      console.log('permutation array post pop=====', permutation);

      str.splice(i, 0, letter);
      console.log('string post adding splice ==== ', str);
    }
  }
}

allAlphabeticalPermutationsofString('GOAT');
