//Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

function friend(friends) {
    let myFriends = []

    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length === 4) {
            myFriends.push(friends[i])

        }
    }
    return myFriends
}

console.log(friend(["Ryan", "Kieran", "Mark"]))
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]))
console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]))