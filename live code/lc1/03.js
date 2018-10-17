/**

Instruksi
=========
Buatlah sebuah function tampilAngkaGanjil yang menjalankan proses menampilkan angka-agka bernilai ganjil.
function tersebut menerima 1 parameter berupa string yang setiap karakternya mewakili satu angka

contoh 1:
test case : tampilAngkaGanjil('12345678')
output : '1357'
angka 1,3,5,7 merupakan angka ganjil
angka 2,4,6,8 merupakan angka genap
maka outputnya '1357'

contoh 1:
test case : tampilAngkaGanjil('1346789')
output : '1379'
angka 1,3,7,9 merupakan angka ganjil
angka 4,6,8 merupakan angka genap
maka outputnya '1379'
 */

function tampilAngkaGanjil(stringAngka){
  var numb = stringAngka
  for( var i=0 ; i<numb.length ; i++){
    for( j =0 ; j<numb[i].length ; j++){
      var number = Number(numb[i][j])   
      // console.log(number);
      //    let test = number+13
      //    console.log(test);
      for( i=0 ; i<number.length ; i++){
        if( number[i] % 2 == 0 ){
           return'yuhuuu';
          }
          else
          {
            return 'oh no';
          }
      }    
    }
  }
 
}

//Test case
tampilAngkaGanjil('12345678') // '1357'
// tampilAngkaGanjil('1346789') // '1379'
// tampilAngkaGanjil('1298967') // '1997'
// tampilAngkaGanjil('43447453') // '3753'
// tampilAngkaGanjil('46824') // ''
