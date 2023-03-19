//capitalize every word on a string.

String.prototype.capitalizeEveryWord = function () {
    let words = this.split(" ")
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1)
    }

    let capitalize = words.join(" ")
    return capitalize

};

let strng = "How can mirrors be real if our eyes aren't real"

let capitalizeIt = strng.capitalizeEveryWord()

console.log(capitalizeIt)