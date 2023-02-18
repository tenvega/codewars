//In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.
//Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
//--the order is: uppercase letters, lowercase, numbers and special characters.



function solve(s) {
    let upperCount = 0;
    let lowerCount = 0;
    let numberCount = 0;
    let specialCount = 0;

    for (let i = 0; i < s.length; i++) {
        let charCode = s.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            upperCount++;
        } else if (charCode >= 97 && charCode <= 122) {
            lowerCount++;
        } else if (charCode >= 48 && charCode <= 57) {
            numberCount++;
        } else {
            specialCount++;
        }
    }

    return [upperCount, lowerCount, numberCount, specialCount];
}

let charNum = solve("Codewars@codewars123.com")
console.log(charNum)