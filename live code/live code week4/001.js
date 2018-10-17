/**
Number Letters
--------------
Implementasikan function `numberLetters` untuk mengganti angka-angka
yang ada di dalam `str` menjadi sebuah huruf yang sesuai dengan aturan:
1 = i
4 = a
3 = e
7 = u
0 = o
Contoh ada di test cases

RULES:
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
  - DILARAANG MENGGUNAKAN BUILT IN FUNCTION APAPUN (HANYA PERLU MENGGUNAKAN LOOP DAN CONDITION)
*/


function numberLetters (str) {
  //-merubah number ke letter dengan cara merubah variabel angka menjadi string,
  //-hal bertama yang harus dilakukan adalah dengan cara membuat variabel str sebagai daftar yang harus dirubah(array)
  //-yang kedua adalah melakukan looping untuk mengecek apakah daftar variabel adalah angka atau huruf
  //-yang ketiga adalah mengkondisikan variabel menggunakan if else/switch  supaya keluar tulisan yang diharapkan
let result = ''
    for (var j = 0; j < str.length; j++) {
      switch(str[j]) {
        case '1': result += 'i';
        break;
        case '4': result += 'a';
        break;
        case '3': result += 'e';
        break;
        case '7': result += 'u';
        break;
        case '0': result += 'o';
        break;
        default: result += str[j]
        break;
      }
    }return result;
}
// Test cases
console.log(numberLetters('d1m1tr1w4hy7d1p7tr4')); // dimitriwahyudiputra
console.log(numberLetters('s3rg31dr4g7n0v')); // sergeidragunov
console.log(numberLetters('j1nk4z4m4')); // jinkazama
console.log(numberLetters('s7m3t4l')); // sumetal
console.log(numberLetters('m04m3t4l')); // moametal
console.log(numberLetters('')); //
