//Count the number of divisors of a positive integer 

function getDivisorsCnt(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++
        }
    }
    return count
}

console.log(getDivisorsCnt(12))//output : 6