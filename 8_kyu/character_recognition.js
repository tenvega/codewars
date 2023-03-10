//Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1

function correct(string) {
    string = string.split('')
    for (let i = 0; i < string.length; i++) {
        if (string[i] === '5') string[i] = 'S'
        else if (string[i] === '0') string[i] = 'O'
        else if (string[i] === '1') string[i] = 'I'
    }
    return string.join('')
}

console.log(correct("L0ND0N"))
console.log(correct("DUBL1N"))
console.log(correct("51NGAP0RE"))
console.log(correct("BUDAPE5T"))
console.log(correct("PAR15"))

