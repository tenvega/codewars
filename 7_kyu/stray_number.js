// You are given an odd - length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.

function stray(numbers) {
    let standout = numbers.reduce((x, y) => x ^ y)
    return numbers.filter(num => num === standout)[0]
}


console.log(stray([2, 2, 1, 5, 5, 6, 6]))