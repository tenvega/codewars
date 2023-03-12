//Write a function which takes a list of strings and returns each line prepended by the correct number.
//The numbering starts at 1. The format is n: string.Notice the colon and space in between.

function number(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push((i + 1) + ": " + array[i])
    }
    return result;
}

console.log(number(["a", "b", "c"]))