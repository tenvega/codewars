//Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
   let result = 0 
   for(let i = 0; i < array.length; i ++){
        result += array[i]
}
   if(result % 2 === 0){
       return "even"
     }else{
       return "odd"
   }
}

console.log(oddOrEven([0, 1, 2]))
console.log(oddOrEven([0, -1, -5]))
console.log(oddOrEven([-1023, 1, -2]))
console.log(oddOrEven([1023, 1, 3]))