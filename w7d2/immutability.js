// Immutability
// Cannot be changed, or modified (ie an immutable thing)

const bob = 5
const otherBob = bob + 5


const someList = [1, 2, 3, 4, 5]
someList.push(6)

const someOtherList = [1, 2, 3, 4, 5, []]

// const newList = someOtherList
// newList.push(6)

const newList = []
for (const element of someOtherList) {
  newList.push(element)
}
newList.push(6)

const newList = [...someOtherList]

newList.pop()

const purePop = arr => {
  const buffer = [...arr]
  const pop = buffer.pop()

  return [buffer, pop]
}