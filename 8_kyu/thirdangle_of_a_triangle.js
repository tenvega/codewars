// You are given two interior angles(in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.


function otherAngle(a, b) {

    let sum = a + b

    let thirdAngle = 180 - sum

    return thirdAngle;
}

console.log(otherAngle(30, 60)); // 90
console.log(otherAngle(45, 45)); // 90
console.log(otherAngle(20, 100)); // 60