//The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word) {
    word = word.toLowerCase();
    let newStr = {}
    for (let i = 0; i < word.length; i++) {
        let char = word[i]
        newStr[char] = (newStr[char] || 0) + 1
    }
    let result = "";
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (newStr[char] > 1) {
            result += ")";
        } else {
            result += "(";
        }
    }
    return result;

}

console.log(duplicateEncode("din")); // "((("
console.log(duplicateEncode("recede")); // "()()()"
console.log(duplicateEncode("Success")); // ")())())"
console.log(duplicateEncode("(( @")); // "))(("