//Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

function twiceAsOld(dadYearsOld, sonYearsOld) {
    let diff = dadYearsOld - 2 * sonYearsOld
    return Math.abs(diff)
}

console.log(twiceAsOld(40, 20)); 