// Reading files synchronously and async

const { readFile, readFileSync } = require('fs');

const actionWhenFinishedReadingTheFile = (err, data) => {
  if (err) throw err;
  console.log(data);
}

console.log('READING THE FILE')
readFile('./potato2.txt', (err, data) => {
  console.log(`Error is ${err}`)
  console.log(`Data is ${data}`)
});
console.log('FINISHED READING THE FILE')


const data = readFileSync('./potato.txt', 'utf-8')
console.log(data)

// What happened

// console a starting message
// started the action of reading the file
// console the finished reading
// console err / data