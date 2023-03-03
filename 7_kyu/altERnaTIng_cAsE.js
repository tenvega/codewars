//Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. 

String.prototype.toAlternatingCase = function () {
    let result = ''
    for (let i = 0; i < this.length; i++) {
        const char = this[i]
        if (char === char.toUpperCase()) {
            result += char.toLowerCase()
        } else {
            result += char.toUpperCase()
        }
    }

    return result

}

const myString = 'HeLLo WoRLD';
const alternatingCase = myString.toAlternatingCase();
console.log(alternatingCase);
