/*
   * buatlah function penerjunPayung yang menerima 2 parameter
   * parameter yang pertama adalah array posisi x dan y lokasi yang dipilih untuk terjun payung
   * parameter array berisi peta lokasi yang berisi symbol O dan X
   * function ini akan mengecek apakah penerjun jatuh ke lokasi dengan simbol O atau X
   * jika turun di simbol O maka akan menampilkan "Pendaratan berhasil"
   * jika turun di simbol X maka akan menampilkan "Pendaratan gagal jatuh di zona bahaya"
   * posisi x dan posisi y selalu dimulai dari 0, posisi x menunjukan baris dan posisi y
     menunjukan kolom seperti ilustrasi dibawah
  * asumsi map selalu memiliki sisi yang sama misal 2x2, 3x3, atau 4x4 dan seterusnya
  EXAMPLE:
  Jika posisi target jatuh [1, 2] maka akan jatuh di 'O'

                Pos Y   ke-0  ke-1 ke-2
                      [   |    |    |
                          |    |    |
  posisi X ke 0         ['X', 'X', 'O'],
  posisi X ke 1         ['O', 'X', 'O//jatuh disini'],
  posisi X ke 2         ['X', 'X', 'X'],
                      ]


  rules:
  1. tidak boleh menggunakan indexOf atau findIndex
*/

function penerjunPayung(target, map){
 if (map[target[0]][target[1]] === 'O'){
   return "Pendaratan berhasil"
 } else {
   return "Pendaratan gagal jatuh di zona bahaya"
 }
}


// // Test Case
console.log(penerjunPayung([2,3], [
   ['O','O','X','O'],
   ['X','O','X','X'],
   ['X','X','X','O'],
   ['X','O','O','X']
])); // Pendaratan berhasil

console.log(penerjunPayung([0,2], [
 ['X','X','X','X'],
 ['X','O','X','X'],
 ['O','X','O','O'],
 ['X','X','X','X']
])); // Pendaratan gagal jatuh di zona bahaya

console.log(penerjunPayung([1,1], [
 ['X','X'],
 ['X','O']
])); // Pendaratan berhasil

/*
==================================
Array Mastery: Group Odd Evens
==================================

[INSTRUKSI]
Function groupOddEven akan menerima satu parameter berupa array yang berisi number.
Function akan mengelompokkan setiap number yang ganjil (odd) dan setiap number yang genap (even),
dan akan mereturn sebuah string dengan format berikut:
"ODDS: <OddNum1>,<OddNum2>,<OddNum3> EVENS: <EvenNum1>,<EvenNum2>,<EvenNum3>"
aturan:
  - Apabila tidak ada angka ganjil, hanya tampilkan:
  "EVENS: <EvenNum1>, <EvenNum2>"
  - Apabila tidak ada angka genap, hanya tampilkan:
  "ODDS: <OddNum1>, <OddNum2>"
  - Apabila tidak ada angka sama sekali, tampilkan string kosong!
  - Angka tidak perlu diurutkan!
[CONTOH]
input: [1, 5, 8, 2, 3]
output: "ODDS: 1, 5, 3 EVENS: 8, 2"
input: [1, 1, 1]
output: "ODDS: 1, 1, 1"
input: [2, 8, 10]
output: "EVENS: 2, 8, 10"
[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
*/

function groupOddEven(students) {
  
  var genap = []
  var ganjil = []
  for(i=0;i<students.length;i++){
    // console.log(i)
    if (students[i] % 2 == 0) {
      genap.push(students[i])
    } else {
      ganjil.push(students[i])
    }
  }
  if (genap.length >= 1 && ganjil.length >= 1){
  return '"ODDS: ' + ganjil.join(", ") + " EVENS: " + genap.join(", ") +'"'
  } else if (genap.length >= 1 && ganjil.length <= 1){
  return '"EVENS: ' + genap.join(", ") +'"'
  } else if (genap.length <= 1 && ganjil.length >= 1){
  return '"ODDS: ' + ganjil.join(", ") +'"'
  } else if (students.length <= 1) {
    return '""';
  }
}

  
// TEST CASES
console.log(groupOddEven([1, 5, 8, 2, 3])); // "ODDS: 1, 5, 3 EVENS: 8, 2"
console.log(groupOddEven([1, 1, 1])); // "ODDS: 1, 1, 1"
console.log(groupOddEven([2, 8, 10])); // "EVENS: 2, 8, 10"
console.log(groupOddEven([2, 111])); // "ODDS: 111 EVENS: 2"
console.log(groupOddEven([])); // ""