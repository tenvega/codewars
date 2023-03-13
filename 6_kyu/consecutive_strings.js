//You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// You are given an array(list) strarr of strings and an integer k.Your task is to return the first longest string consisting of k consecutive strings taken in the array.

function longestConsec(strarr, k) {
    if (strarr.length === 0 || k <= 0) {
        return "";
    }

    let maxLen = 0;
    let maxStr = "";

    for (let i = 0; i <= strarr.length - k; i++) {
        let concatenatedValues = strarr.slice(i, i + k).join("");
        if (concatenatedValues.length > maxLen) {
            maxLen = concatenatedValues.length;
            maxStr = concatenatedValues;
        }
    }
    return maxStr
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))
console.log(longestConsec([], 3))
console.log(longestConsec(["itvayloxrp", "wkppqsztdkmvcuwvereiupccauycnjutlv", "vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2))