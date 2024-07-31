/**Write a function that takes an integer as input, and returns the number
 of bits that are equal to one in the binary representation of that number.
 You can guarantee that input is non-negative. */

 var countBits = function(n) {
  const newBitsString = n.toString(2);
  const oneMatches = n.toString(2).match(/1/g);
  return oneMatches? oneMatches.length : 0;
};