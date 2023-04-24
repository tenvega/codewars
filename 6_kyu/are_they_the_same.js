
//Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.



function comp(a, b) {
  // Check if either array is null or undefined
  if (!a || !b) {
    return false;
  }
  
  // Sort both arrays in ascending order
  a.sort((x, y) => x - y);
  b.sort((x, y) => x - y);
  
  // Create a new array that contains the squares of each element in a
  const aSquared = a.map(x => x * x);
  
  // Check if b contains the same elements as aSquared
  return b.every((x, i) => x === aSquared[i]);
}

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]))