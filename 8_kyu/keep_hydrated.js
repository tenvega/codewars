
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
//for example:
// time = 3 ----> litres = 1

// time = 6.7-- -> litres = 3

// time = 11.8-- > litres = 5

function litres(time) {
    let liters = time * 0.5
    return Math.floor(liters)
}

console.log(litres(2)) //should return 1 litre'
console.log(litres(1.4)) // 'should return 0 litres'
console.log(litres(12.3)) // 'should return 6 litres'
console.log(litres(0.82)) //  'should return 0 litres'
console.log(litres(11.5)) // 'should return 5 litres'