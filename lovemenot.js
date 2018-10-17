/*
==================================
Array Mastery: Love Me Not
==================================

Nama: REZA PRAMUDHIKA

[INSTRUKSI]
Seorang perempuan sedang menggalaui apakah seseorang menyukai dia atau tidak. 
Ketimbang mencabut kelopak bunga untuk menghitung jika dia suka atau tidak, 
perempuan tersebut membuat sebuah program.

Function loveMeNot akan menerima satu parameter berupa array yang berisikan boolean.
Apabila jumlah true dalam array lebih besar dari jumlah false, maka function akan mereturn "HE LOVES ME!".
Jika tidak, maka return "HE DOES NOT LOVE ME :(".
Jika jumlah true dan false sama, maka function akan me-return "GALAU".
Mudah bukan? :)

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .filter, atau .reduce!
*/
/**PSEUDOCODE
 * function loveMeNot(decisions)
 *    Initialize trueCounter to 0;
 *    Initialize flaseCounter to 0;
 *    FOR each decisions:
 *      IF decisions[position] is equal to true, THEN:
 *          Add 1 to 'trueCounter'
 *      ELSE IF decisions[position] is equal to false, THEN:
 *          Add 1 to 'falseCounter'
 *    ENDFOR
 *    IF value of trueCounter is greather than falseCounter, THEN:
 *        Return  'HE LOVES ME!'
 *    ELSE IF value of trueCounter is less than falseCounter, THEN:
 *        Return 'HE DOES NOT LOVE ME :('
 *    ELSE IF value of trueCounter is equal to value of falseCounter, THEN:
 *        Return 'GALAU'
 *    ENDIF
 *      
*/

function loveMeNot(decisions) {
    var trueCounter = 0;
    var falseCounter = 0;
    for(var i=0; i<=decisions.length-1; i++){
      if (decisions[i] === true){
        trueCounter += 1;
      }else if(decisions[i] === false){
        falseCounter +=1;
      }
    }
    if (trueCounter>falseCounter){
      return 'HE LOVES ME!';
    }else if(trueCounter<falseCounter){
      return 'HE DOES NOT LOVE ME :(';
    }else if(trueCounter === falseCounter){
      return 'GALAU';
    }
  }
    
  // TEST CASES
  console.log(loveMeNot([true, false, false])); // "HE DOES NOT LOVE ME :("
  console.log(loveMeNot([true, true, false, false, true])); // "HE LOVES ME!"
  console.log(loveMeNot([true, false])); // "GALAU"
  console.log(loveMeNot([])); // "GALAU"
  console.log(loveMeNot([false])); // "HE DOES NOT LOVE ME :("