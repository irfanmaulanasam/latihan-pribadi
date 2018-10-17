/**

  pada bulan tanggal 1 pada bulan october 2019 jatuh pada hari senin
  buatlah sebuah program yang menampilkan nama hari berdasarkan input tanggal pada bulan dan tahun yang sama

  contoh 1 (tanggal = 2):
  hari selasa

  contoh (tanggal = 8):
  hari senin

  contoh (tanggal = 17):
  hari rabu


 */

var tanggal = 1;
var bulan = ' Oktober';
var tahun = ' 2019 ';
// Put your code here
//Switch Case

switch(tanggal){
  case 1:
  tanggal = ' senin ';
  break;
  case 2:
  tanggal = ' selasa ';
  break;
  case 3:
  tanggal = ' rabu ';
  break;
  case 4:
  tanggal = ' kamis ';
  break;
  case 5:
  tanggal = ' jumat ';
  break;
  case 6:
  tanggal = ' sabtu ';
  break;
  case 7:
  tanggal = ' minggu ';
  break;
  case 8:
  tanggal = ' senin ';
  break;
  case 9:
  tanggal = ' selasa ';
  break;
  case 10:
  tanggal = ' rabu ';
  break;
  case 11:
  tanggal = ' kamis ';
  break;
  case 12:
  tanggal = ' jumat ';
  break;
  case 13:
  tanggal = ' sabtu ';
  break;
  case 14:
  tanggal = ' minggu ';
  break;
  case 15:
  tanggal = ' senin ';
  break;
  case 16:
  tanggal = ' selasa ';
  break;
  case 17:
  tanggal = ' rabu ';
  break;
  case 18:
  tanggal = ' kamis ';
  break;
  case 19:
  tanggal = ' jumat ';
  break;
  case 20:
  tanggal = ' sabtu ';
  break;
  case 21:
  tanggal = ' minggu ';
  break;
  case 22:
  tanggal = ' senin ';
  break;
  case 23:
  tanggal = ' selasa ';
  break;
  case 24:
  tanggal = ' rabu ';
  break;
  case 25:
  tanggal = ' kamis ';
  break;
  case 26:
  tanggal = ' jumat ';
  break;
  case 27:
  tanggal = ' sabtu ';
  break;
  case 28:
  tanggal = ' minggu ';
  break;
  case 29:
  tanggal = ' senin ';
  break;
  case 30:
  tanggal = ' selasa ';
  break;
  case 31:
  tanggal = ' rabu ';
  break;
}
switch(bulan){
  case bulan<=1:
  tahun = ' bulan salah';
  break;
  case tahun>=12:
  tahun = ' bulan salah';
  break;
  default:
  tahun=tahun;
  break;
}
switch(tahun){
  case tahun<1900:
  tahun = ' Invalid Year ';
  break;
  case tahun>2200:
  tahun = ' Invalid Year ';
  break;
  default:
  tahun=tahun;
  break;
}


console.log( tanggal+ ','+ tanggal + bulan + tahun )
