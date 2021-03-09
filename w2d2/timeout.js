// Playing with timeouts
// const answer = () => console.log('Haha did you really think...')

// console.log('I will wait 5 seconds and tell you a secret')
// setTimeout(answer, 5000)
// console.log('Hahaha did you think I was funny ?')

// What happened

// Define answer
// call the log method of the console object with string: ...
// set a timer of 5 seconds and ask JS to run the callback when that is done
// console log again
// ....
// Eventually we run the callback


// Make a breakfast

// Cook some eggs
// Make some hashbrowns
// Plate those things


const cookEggs = (nextStep) => {
  console.log('COOKING THE EGGS 🥚')

  setTimeout(nextStep, 2000)
}

const hashBrownifyYourLife = (nextStep) => {
  console.log('Hashbrowns are better than bacon, fight me.')

  setTimeout(nextStep, 3000)
}

const makeAFancyPlateYAS = () => {
  console.log('LOOK AT THIS BEAUTIFUL PLATE OF FOOD')
}

// cookEggs()
// hashBrownifyYourLife()
// makeAFancyPlateYAS()

const hashbrownAndPlate = () => hashBrownifyYourLife(makeAFancyPlateYAS)
// cookEggs(hashbrownAndPlate)

// cookEggs(makeAFancyPlateYAS)

// cookEggs(() => hashBrownifyYourLife(makeAFancyPlateYAS))
// const bob = hashBrownifyYourLife(makeAFancyPlateYAS)
// console.log(bob)


// cookEggs(undefined)
// cookEggs(() => hashBrownifyYourLife(makeAFancyPlateYAS))
cookEggs(hashbrownAndPlate)


// findWaldo([...], (index) => actionWhenFound(index, true))