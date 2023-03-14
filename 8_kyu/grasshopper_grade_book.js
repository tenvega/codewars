// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

function getGrade(s1, s2, s3) {
    const averageScore = (s1 + s2 + s3) / 3;
    if (averageScore >= 90 && averageScore <= 100) {
        return "A"
    } else if (averageScore >= 80 && averageScore < 90) {
        return "B"
    } else if (averageScore >= 70 && averageScore < 80) {
        return "C"
    } else if (averageScore >= 60 && averageScore < 70) {
        return "D"
    } else {
        return "F"
    }
}

console.log(getGrade(100, 85, 96))
console.log(getGrade(70, 70, 100))
console.log(getGrade(75, 70, 79))
console.log(getGrade(66, 62, 68))
console.log(getGrade(48, 55, 52))