console.log(someFunction())

// Function declaration
function someFunction() {
  return "I am a declaration"
}

// Function expression
const someOtherFunction = function () {
  return "I am an expression"
}

someOtherFunction = function () {
  return "I am an evil expression"
}

console.log(someOtherFunction())






function someFunction() {
  return "I am a mwahahaha evil declaration"
}