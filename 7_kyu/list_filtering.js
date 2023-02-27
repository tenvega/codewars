//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
function filter_list(l) {
    // Return a new array with the strings filtered out
    let newArr = []
    for (let i = 0; i < l.length; i++) {
        if (typeof l[i] === "number") {
            newArr.push(l[i])
        }
    }
    return newArr
}

console.log(filter_list([1, 2, 'a', 'b']))