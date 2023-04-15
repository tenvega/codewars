//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

function validatePIN(pin) {
  const numericRegex = /^[0-9]+$/;

  // Check if the input is a string of only digits and has a length of 4 or 6
  if (numericRegex.test(pin) && (pin.length === 4 || pin.length === 6)) {
    return true;
  } else {
    return false;
  }
}

console.log(validatePIN("1234"))
console.log(validatePIN("0000"))
console.log(validatePIN("1111"))
console.log(validatePIN("123345"))
console.log(validatePIN("123.aZ345"))
console.log(validatePIN(".234"))