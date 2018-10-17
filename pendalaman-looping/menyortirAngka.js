// Algoritma Bahasa Manusia (human language)
// 1. Mulai.
// 2. Memasukkan jumlah data (N) yang diinputkan.
// 3. Inisialisasi data (N) yang diinputkan.
// 4. Memasukkan data ke-1.
// 5. Memasukkan data ke-2.
// 6. Memasukkan data ke-3.
// 7. Memasukkan data ke-4.
// 8. Memasukkan data ke-5.
// 9. Inisialisasi data ke-1 sampai ke-5.
// 10. Jika data ke-5 < >
// 11. Jika data ke-4 < >
// 12. Jika data ke-3 < >
// 13. Jika data ke-2 < >
// 14. Jika data ke-1 > data ke-5, maka tukar data.
// 15. Ulangi proses pertukaran data dari akhir ke awal.
// 16. Cetak hasil data ke-1 hingga ke-5.
// 17. End (stop).
var num = [4,3,2,2,8,1,6]
var tampung = num[0];
for( i=0 ; i<num.length ; i++){
    tampung = num[i];
    for( j=i.length ; j>num.length-1 ; j--){
        num = tampung + num[j]
        // if( i.length>j.length){
        //     tampung =num[i];
        // }
    }
    console.log(num)
}
// for ( i = 0; i <=name.length ; i++ ){
//     asterisk = '';
//     console.log(''); 
//     for ( j = 0; j < i ; j++ ){
//         asterisk = asterisk + name[j];
//     }console.log(asterisk)
// }