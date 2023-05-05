// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s){
  const length = s.length
  const middleIndex = Math.floor(length / 2)
  return length % 2 === 0 ? s.substr(middleIndex -1, 2): s.substr(middleIndex, 1)
}

console.log(getMiddle("Hello")); // Output: "l"
console.log(getMiddle("Hey there")); // Output: "t "
console.log(getMiddle("four")); // Output: "ou "
