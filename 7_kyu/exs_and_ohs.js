//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
    let xCount = 0
    let oCount = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === "x") {
            xCount++
        } else if (str[i].toLowerCase() === "o") {
            oCount++
        }
    }
    return xCount === oCount
}

console.log(XO('xo'))
console.log(XO("xxxm"))
console.log(XO("ooom"))