
//Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s) {
    let pastMid = ((h * 3600) + (m * 60) + s) * 1000
    return pastMid;
}

console.log(past(0, 1, 1));