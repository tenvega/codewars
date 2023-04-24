//Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

function shortcut (string) {
  let newStr = ''
  for(let i = 0; i < string.length; i ++){
    let char = string[i]
    if(!'aeiouAEIOU'.includes(char)){
      newStr += char
    }
  }
  return newStr;
}

console.log(shortcut("hello"))
console.log(shortcut('how are you today?'))
console.log(shortcut("complain"))
console.log(shortcut("never"))