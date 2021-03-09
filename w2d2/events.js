// Let's build some events!

// Cooking

// Clients

// Client comes in -> ???
// Start cooking -> Set timeout
// Cook Eggs
// Hashbrowns
// Client the plate
// Client the bill


const EventEmitter = require('events');

class KitchenRunner extends EventEmitter { }
const kitchenRunner = new KitchenRunner();


kitchenRunner.on('newclient', () => {
  console.log('Hello!');
  // Start cooking
  setTimeout(() => kitchenRunner.emit('eggsFinished'), 2000)
});

kitchenRunner.on('eggsFinished', () => {
  console.log('Eggs are ready!')
  // Start the hashbrowns
  setTimeout(() => kitchenRunner.emit('hbFinished'), 2000)

})

kitchenRunner.on('hbFinished', () => {
  console.log('Time to plate')
})

// myEmitter.emit('hi');

// // setTimeout(() => myEmitter.emit('hi'), 1500)
// setInterval(() => myEmitter.emit('hi'), 1500)

console.log('bob')
kitchenRunner.emit('newclient')
console.log('pouet')