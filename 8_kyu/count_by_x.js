//Create a function with two arguments that will return an array of the first n multiples of x.
//Assume both the given number and the number of times to count will be positive numbers greater than 0.
//Return the results as an array or list.

function countBy(x, n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        result.push(x * i)
    }

    return result;
}

console.log(countBy(3, 5)) // Output: [3, 6, 9, 12, 15]