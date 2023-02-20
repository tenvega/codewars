//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function DNAStrand(dna) {
    let newDna = ""
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === "A") {
            newDna += "T"
        } else if (dna[i] === "T") {
            newDna += "A"
        } else if (dna[i] === "C") {
            newDna += "G"
        } else if (dna[i] === "G") {
            newDna += "C"
        }
    }
    return newDna
}

console.log(DNAStrand("AAAA"))
console.log(DNAStrand("ATTGC"))
console.log(DNAStrand("GTAT"))