
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})




readline.question(`enter integers?`, numbers => {
 let arr =  numbers.split(' ');

  console.log(arr)
  readline.close()
})
