//You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortArray(arr) {

    const odds = arr.filter(num => num % 2 !== 0);

    odds.sort((a, b) => a - b);

    return arr.map(num => num % 2 !== 0 ? odds.shift() : num);
}

console.log(sortArray([5, 3, 2, 8, 1, 4]))
console.log(sortArray([5, 3, 1, 8, 0]))
console.log(sortArray([]))