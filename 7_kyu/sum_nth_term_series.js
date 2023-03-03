//write a function which returns the sum of following series upto nth term(parameter).
function seriesSum(n) {

    let sum = 0;
    let denominator = 1;
    for (let i = 1; i <= n; i++) {
        sum += 1 / denominator
        denominator += 3;
    }
    return sum.toFixed(2)
}

console.log(seriesSum(4));