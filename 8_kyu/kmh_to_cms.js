// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).


function cockroachSpeed(speed) {
    
  const cmPerSec = Math.floor(speed * 27.7778);
  return cmPerSec;
}

console.log(cockroachSpeed(10)); // Output: 277
