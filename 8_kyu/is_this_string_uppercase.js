//Create a method to see whether the string is ALL CAPS.

String.prototype.isUpperCase = function() {
  for (let i = 0; i < this.length; i++) {
    if (this.charAt(i) !== this.charAt(i).toUpperCase()) {
      return false;
    }
  }
  return true;
};


const myString = "HELLO WORLD";
const myString2 = "HEllO WORLD";
console.log(myString.isUpperCase()); // true
console.log(myString2.isUpperCase()); // false
