//Create a function which answers the question "Are you playing banjo?".
//If your name starts with the letter "R" or lower case "r", you are playing banjo!

function areYouPlayingBanjo(name) {
    if (name[0] === "R" || name[0] === "r") {
        return name + " plays banjo"
    } else {
        return name + " does not play banjo"
    }
}

console.log(areYouPlayingBanjo("Adam"));
console.log(areYouPlayingBanjo("Peter"));
console.log(areYouPlayingBanjo("rolf"));