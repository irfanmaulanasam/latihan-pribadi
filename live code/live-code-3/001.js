/**
Array Injector
--------------
Implementasikan function `arrayInjector` untuk menyisipkan `secondData` ke `firstData`.
Diberikan juga parameter tambahan yaitu `index` yang akan digunakan untuk menandakan bahwa
`secondData` akan dimasukkan mulai ke `index`.

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan regex .match dan lainnya!

Contoh:
  - input: [8, 'foobar', 'foobaz'], 1, ['bar', 'baz']
    output: [8, 'bar', 'baz', 'foobar', 'foobaz']
*/
//merubah index dalam array menjadi satu array yang bergabung dalam sebuah array gabungan
// 
function arrayInjector (firstData, index, secondData) {
  var arrGroup = []
  for( i=0 ; i<arrayInjector.length-1 ; i--){
    if(i ===0){
      var tampung =arrGroup.push()
    }
  }return arrGroup
}

console.log(arrayInjector([1, 5, 6], 1, [2, 3, 4]));
// [1, 2, 3, 4, 5, 6, 7]

console.log(arrayInjector([10, 20, 70], 2, [30, 40, 50, 60]));
// [10, 20, 30, 40, 50, 60, 70]

console.log(arrayInjector(['Dimitri', 'Alexei', 'Alexander', 'Alisa'], 3, ['Dragunov']));
// ['Dimitri', 'Alexei', 'Alexander', 'Dragunov', 'Alisa']
