/*
===============================================
Credential Validator (Anchor with Rocket Score)
===============================================

Nama:________

[INSTRUKSI]

DILARANG MENGGUNAKAN Regex dan Match untuk soal ini!


function credentialValidator akan menerima tiga parameter berupa string, yakni username, email, dan password. Buatlah validasi tiga parameter tersebut dengan syarat berikut:

1. [ANCHOR] Username harus memiliki panjang minimal 4 karakter dan maksimal 20 karakter. Username tidak boleh mengandung simbol '*', '@', '#', '$', '%', '^', '&', dan '*'.

2. [ANCHOR] Password harus memiliki panjang minimal 5 karakter, dan harus mengandung kombinasi minimal 1 angka dan 1 huruf.

3. [ROCKET] Email harus memiliki panjang minimal 6 karakter, harus memiliki hanya satu simbol '@' dan memiliki nama email di sisi kiri simbol '@' dan memiliki domain di sisi kanan simbol '@'. Format: [NAMA EMAIL SISI KIRI]@[NAMA EMAIL].[DOMAIN].  domain harus memiliki hanya satu simbol '.' dimana sisi kiri maksimal 6 karakter, dan sisi kanan maksimal 3 karakter.

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
    var symbols = '*@#$%^&';
    var checkUser = false;
    
    if(username.length > 4 && username.length < 20) {
      for(var i = 0; i < username.length; i++) {
        if(symbols.indexOf(username[i]) === -1) {
          checkUser = true;
        } 
      }
    }
    
    var digit = '0123456789';
    var huruf = 'abcdefghijklmnopqrstuvwxyz';
    var checkPassword = false;
    var count_huruf = 0;
    var count_digit = 0;
    
    if(password.length >= 5) {
      for(var j = 0; j < password.length; j++) {
        if(digit.indexOf(password[j]) !== -1) {
          count_digit++;
        } else if (huruf.indexOf(password[j]) !== -1) {
          count_huruf++;
        }
      }
      
      if (count_huruf > 0 && count_digit > 0) {
        checkPassword = true;
      }
    }
    
    var checkEmail = false;
    var countAt = 0;
    var countDot = 0;
    
      for(var k = 0; k < email.length; k++) {
        if(email[k].indexOf('@') !== -1) {
          countAt++;
        }
        if(email[k].indexOf('.') !== -1) {
          countDot++;
        }
      }
      if(countAt === 1 && countDot === 1) {
        var emailSplit = email.split('@');
        var emailLeft = emailSplit[0];
        var emailRight = emailSplit[1].split('.');
        var emailName = emailRight[0];
        var emailDom = emailRight[1];
        
        if(emailLeft.length >= 6) {
          if(emailName.length <= 6 && emailDom.length === 3) {
            checkEmail = true;
          }
        }
      }
    
    return checkUser === true && checkEmail === true && checkPassword === true;
  }
  
  console.log(credentialValidator('adhywiranata', 'tes22', 'adhywiran.ata@coding.com'));
  console.log(credentialValidator('adhy test 123 testing 321 test 123 321 test', 'test123', 'adhywiranata@coding.com'));
  console.log(credentialValidator('erwin', 'testing', 'erwin@nice.com'));
  console.log(credentialValidator('*@#$%^&', 'tes', 'fuadi@gmail.com'))