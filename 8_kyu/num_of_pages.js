//Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

function paperwork(n, m) {
    if (m < 0 || n < 0) {
        return 0;
    }
    return m * n;
}

console.log(paperwork(5, 5))
console.log(paperwork(5, -5))
console.log(paperwork(-5, -5))