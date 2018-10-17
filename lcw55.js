/*
===============================================
Credential Validator (Anchor with Rocket Score)
===============================================

Nama:Septian Maulana

[INSTRUKSI]

DILARANG MENGGUNAKAN Regex dan Match untuk soal ini!


function credentialValidator akan menerima tiga parameter berupa string, yakni username, email, dan password. Buatlah validasi tiga parameter tersebut dengan syarat berikut:

1. [ANCHOR] Username harus memiliki panjang minimal 4 karakter dan maksimal 20 karakter. Username tidak boleh mengandung simbol '*', '@', '#', '$', '%', '^', '&', dan '*'.

2. [ANCHOR] Password harus memiliki panjang minimal 5 karakter, dan harus mengandung kombinasi minimal 1 angka dan 1 huruf.

3. [ROCKET] Email harus memiliki panjang minimal 6 karakter, harus memiliki hanya satu simbol '@' dan memiliki nama email di sisi kiri simbol '@' dan memiliki domain di sisi kanan simbol '@'. Format: [NAMA EMAIL SISI KIRI]@[NAMA EMAIL].[DOMAIN].  domain harus memiliki hanya satu simbol '.' dimana sisi kiri maksimal 4 karakter, dan sisi kanan maksimal 3 karakter.

function akan me-return nilai true jika semua pengecekan terpenuhi, dan false jika minimal satu syarat tidak terpenuhi. Tambahan score bonus rocket apabila sukses melakukan validasi email.


[CONTOH]

input:
  - username: 'adhywiranata'
  - password: 'test123'
  - email: 'adhywiranata@coding.com'
output: true

input: 
  - username: 'adh'
  - password: 'test123'
  - email: 'adhywiranata@coding.com'

output: false, karena username dibawah 4 karakter

input: 
  - username: 'adhy test 123 testing 321 test 123 321 test'
  - password: 'test123'
  - email: 'adhywiranata@coding.com'

output: false, karena username melebihi 20 karakter

input: erwin@nice.com
input: 
  - username: 'erwin'
  - password: 'testing'
  - email: 'erwin@nice.com'

output: false, karena password tidak mengandung 1 angka sama sekali


*/

function credentialValidator(username, password, email) {
    // Code here
    //cek username
    var arrSimbol = '*@#$%^&*';
    if (username.length >= 4 && username.length <= 20) {
      var cekSimbol = [];
      var simbol;
      for (var i = 0; i < username.length; i++) {
        simbol = arrSimbol.indexOf(username[i]);
        cekSimbol.push(simbol);
        cekSimbol.sort(function(a, b) {
          return b - a;
        });
      }
      console.log('ini cekSimbol', cekSimbol)
      if (cekSimbol[0] === -1) {
        //cek password
        var arrAngka = '1234567890';
        var cekAngka = [];
        var angka;
        for (var j = 0; j < password.length; j++) {
          angka = arrAngka.indexOf(password[j]);
          cekAngka.push(angka);
          cekAngka.sort(function(a, b) {
            return b - a;
          });
        }
        console.log(cekAngka)
        if (cekAngka[0] === -1) {
          return false + ', karena password tidak mengandung 1 angka sama sekali';
        } else {
          return true;
        }
        return true;
      } else {
        return (
          false +
          ", karena username mengandung simbol '*', '@', '#', '$', '%', '^', '&', dan '*'"
        );
      }
    } else {
      return false + ', karena username melebihi 20 karakter';
    }
  }
  
  console.log(
    credentialValidator('adhywiranat*a', 'test123', 'adhywiranata@coding.com')
  );
  console.log(
    credentialValidator(
      'adhy test 123 testing 321 test 123 321 test',
      'test123',
      'adhywiranata@coding.com'
    )
  );
  console.log(credentialValidator('erwin', 'testing', 'erwin@nice.com'));
  