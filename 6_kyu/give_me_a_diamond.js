//You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

function diamond(n) {
  // Check if n is an odd and positive number
  if (n % 2 === 0 || n < 1) {
    return null;
  }

  // Initialize an empty string to hold the diamond shape
  let diamondStr = "";

  // Iterate over each row of the diamond
  for (let i = 0; i < n; i++) {
    // For the first half of the diamond
    if (i < Math.floor(n/2) + 1) {
      // Calculate the number of spaces and asterisks for this row
      const numSpaces = Math.floor(n/2) - i;
      const numAsterisks = 2*i + 1;

      // Add the row to diamondStr
      diamondStr += " ".repeat(numSpaces) + "*".repeat(numAsterisks) + "\n";
    } 
    // For the second half of the diamond
    else {
      // Calculate the number of spaces and asterisks for this row
      const numSpaces = i - Math.floor(n/2);
      const numAsterisks = 2*(n-i)-1;

      // Add the row to diamondStr
      diamondStr += " ".repeat(numSpaces) + "*".repeat(numAsterisks) + "\n";
    }
  }
  
  // Return the completed diamond shape as a string
  return diamondStr;
}


console.log(diamond(1))
console.log(diamond(2))
console.log(diamond(3))
console.log(diamond(5))