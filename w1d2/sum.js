// Take all the values from the arguments in the terminal, add them together and output the sum
// Positive & negative values needs to be accounted for, and everything else should be ignored

// $ node sum.js 1 2 3 4 5 => 15
// $ node sum.js 1 2 3 4 bob 5 => 15

// process.argv ??? Array ?


// What do we have
// An input coming from the command line

// What do we want
// The sum of all elements in the terminal after the filename

// How do we do that?
// We need to extract the appropriate values of process.argv (array)
// ['nodeis','fileis','1','2','3','4','5']

// We need to clean up the array to take only what we need (using .slice(2))
// And store it in a new array
// ['1','2','3','4','5']
const cleanedArray = process.argv.slice(2)


// Declare an accumulator that starts at 0 (DO NOT FORGET NEXT TIME)
// Iterate over the cleaned up array (for ?)
// Convert the array value to a number (DO NOT FORGET NEXT TIME)
// Check if they are numbers
// add the numbers together if the value is a number
// Return the sum of all numbers

const sumOfValuesInArray = function (arrayOfNumbers) {
  let accumulator = 0
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    const convertedValue = Number(arrayOfNumbers[i]) //Gives NaN if is not a number
    if (!Number.isNaN(convertedValue)) {
      accumulator += convertedValue
    }
  }
  return accumulator
}

console.log(sumOfValuesInArray(cleanedArray))


// Question 2: Do the sum of the following array [1,50,'23']

sumOfValuesInArray(questionTwoArray)