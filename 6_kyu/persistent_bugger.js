//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function multiplicativePersistence(num) {
    // Convert the number to a string so we can access its digits
    num = num.toString();

    // Keep track of the number of times we've multiplied the digits
    var persistence = 0;

    // Repeat until we have a single-digit number
    while (num.length > 1) {
        // Multiply the digits of the current number together
        var product = 1;
        for (var i = 0; i < num.length; i++) {
            product *= parseInt(num[i]);
        }

        // Update the number and the persistence
        num = product.toString();
        persistence++;
    }

    // Return the final persistence
    return persistence;
}

console.log(multiplicativePersistence(39)); // 3
console.log(multiplicativePersistence(123456)); // 2
console.log(multiplicativePersistence(999)); // 4
