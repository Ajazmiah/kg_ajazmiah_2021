
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

  let print='';
  let i = 0;
  let j = 0;

  for(i = 0 ; i < ToString.length; i++){
    for(j = 0 ; j < ToString[i].length; j++){

      let n = ToString[i][j];
      print = print + phonetics[n];
    }
    print = print + ',';
  }
  console.log(print)


}




readline.question(`enter integers?`, numbers => {
 let arr =  numbers.split(' ');

 toPhonetic(arr)
  readline.close()
})
