/*
================
A in the Middle
================

Nama:Septian Maulana

[INSTRUKSI]
function aInTheMiddle adalah sebuah function yang menerima satu parameter yaitu sebuah array yang menampung string.
Function akan mengumpulkan semua string dalam array tersebut yang memiliki karakter di tengah yaitu 'a'. Abaikan kecil besar dari karakter.
Jika string genap, dua huruf di tengah harus 'a'.
Kumpulan string yang memiliki 'a' ditengah akan ditampung dalam array dan di kembalikan oleh function tersebut.

[CONTOH]

input: ['asafw', 'test', 'waw']
output: ['asafw', 'waw']

input: ['baon', 'test', 'taqs']
output: []

input: ['graail', 'nAn', 'naAn']
output: ['graail', 'nAn', 'naAn']

input: ['asafw', 'wow', 'o', 'graail', 'nAn']
output: ['asafw', graail', 'nAn']
*/

function aInTheMiddle(words) {
    // Code here
    var satuKata = 0;
    var arrWords = [];
    
    for(var i = 0; i < words.length; i ++) {
      //console.log(words[i].length);
      satuKata = Math.floor((words[i].length-1)/2);
      //console.log(satuKata);
      if(words[i].length%2 !== 0) {
        if(words[i][satuKata] === 'a' || words[i][satuKata] === 'A') {
          //console.log(words[i]);
          arrWords.push(words[i]);
        }
      }
      if(words[i].length%2 === 0) {
        if(words[i][satuKata+1] === 'a' || words[i][satuKata+1] === 'A') {
          //console.log(words[i]);
          arrWords.push(words[i]);
        }
      }
    }
    return arrWords;
  }
  
  console.log(aInTheMiddle(['asafw', 'test', 'waw'])); // ['asafw', 'waw']
  console.log(aInTheMiddle(['baon', 'test', 'taqs'])); // []
  console.log(aInTheMiddle(['graail', 'nAn', 'naAn'])); // ['graail', 'nAn', 'naAn']
  console.log(aInTheMiddle(['asafw', 'wow', 'o', 'graail', 'nAn'])); // ['asafw', graail', 'nAn']
  console.log(aInTheMiddle([])); // []