// Function & Callback recap

const runOfTheMill = function () {

  return 'bob'
}

const dcComics = () => {

  return 'bob'
}

const oneLiner = () => 'bob'

const someFunction = parameter => {

  return parameter
}

// I want to pass name, age, hobby as parameters

const showInfo = (name, age, hobby) => {

}

// const params = { name, age, hobby }
const showInfoTwo = (params) => { }


// Callback

const step1 = (action) => {

  action()
}

const showNameInConsole = (name) => console.log(`Name is ${name}`)
const singNameInConsole = (name) => console.log(`🎶🎵Name is ${name}🎶🎵`)

const listOfNames = ['Chicken', 'Pollo', 'Poulet', 'Frango']

const accessEachName = (list, actionCB) => {
  for (const name of list) {
    // I don't know what I want to do at the time of defining the function
    actionCB(name)
  }
}

// for(const name of ['Chicken', 'Pollo', 'Poulet', 'Frango']){
//   // I don't know what I want to do at the time of defining the function
//   singNameInConsole(name)
// }

// list => ['Chicken', 'Pollo', 'Poulet', 'Frango']
// action => singNameInConsole(name)

accessEachName(listOfNames, singNameInConsole)
accessEachName(listOfNames, showNameInConsole)

const strictParents = grade => grade > 90
const lenientParents = grade => grade > 50

const singResults = (gradeLevel) => {
  if (gradeLevel === 'good') {
    console.log('🎵🎵Good job!🎶🎶')
  } else {
    console.log('🎵🎵You\'re bad!🎶🎶')
  }
}

const yellResults = (gradeLevel) => {
  if (gradeLevel === 'good') {
    console.log('GOOD JOB')
  } else {
    console.log('BAD JOB. I AM DISAPOINT')
  }
}

const judgingParent = (grade, conditionCallback, actionCallback) => {
  if (conditionCallback(grade)) {
    actionCallback('good')
  } else {
    actionCallback('bad')
  }
}

judgingParent(87, strictParents, singResults)
judgingParent(87, lenientParents, yellResults)