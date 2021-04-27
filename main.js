
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

function toPhonetic(num){
  let phonetics = ['Zero','one','Two','Three','Four','Five','Six','Seven','Eight','Nine'];
  let ToString = [];

  num.forEach((item, i) => {
    ToString.push(item.toString().split(''))
  });




}




readline.question(`enter integers?`, numbers => {
 let arr =  numbers.split(' ');

 toPhonetic(arr)
  readline.close()
})
