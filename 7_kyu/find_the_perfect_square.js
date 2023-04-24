//You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

function findNextSquare(sq) {
  let root = Math.sqrt(sq)
  if(root % 1 !== 0){
    return -1;
  }
  let nextRoot = root + 1
  return nextRoot * nextRoot
}


console.log(findNextSquare(16)); // Output: 25
console.log(findNextSquare(25)); // Output: 36
console.log(findNextSquare(144)); // Output: 169
console.log(findNextSquare(13)); // Output: -1
