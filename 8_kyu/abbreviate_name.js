//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

function abbrevname(name) {
    let initials = name.split(" ").map(word => word.charAt(0)).join(".")

    return initials.toUpperCase()
}

console.log(abbrevname("sam Harris"))