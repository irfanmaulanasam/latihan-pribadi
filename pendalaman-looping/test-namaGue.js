var nama = 'irfan maulanasam';

console.log(nama[0]);
console.log(nama[1]);
console.log(nama[2]);
console.log(nama[3]);
console.log(nama[4]);
console.log(nama[5]);
console.log(nama[6]);
console.log(nama[7]);
console.log(nama[8]);
console.log(nama[9]);
console.log(nama[10]);
console.log(nama[11]);
console.log(nama[12]);
console.log(nama[13]);
console.log(nama[14]);
console.log(nama[15]);

console.log("memunculkan nama dengan cara manual ");
console.log("====================");
for(var i = 0 ; i < nama.length ; i ++ ){
    console.log(nama[i])
}
console.log("memunculkan nama dengan dinamis menggunakan looping, indeks dimunculkan dengan merubah cara memanggil indeks dari satu persatu atau manual menjadi otomatis dengan perbandingan didalam looping ");
console.log("====================");
var tampung='';
for(var i = 0 ; i < nama.length ; i ++ ){
    if( i%2 === 0 ){
        console.log(nama[i]);
    }
}
console.log("memunculkan nama secara berderet dari atas ke bawah serta yang dimunculkan hanya indeks genap saja  dengan cara looping dan conditional if");
console.log("====================");
var tampung='';
for(var i = 0 ; i < nama.length ; i ++ ){
    if( i%2 === 0 ){
        tampung=tampung+nama[i];
    }
}console.log(tampung)
console.log("memunculkan nama hanya pada indeks genap dengan secara dinamis dengan looping dan conditional if, indeks dimunculkan dengan cara membuat variabel baru bernama tampung untuk mengumpulkan hasil looping dalam satu kalimat");
console.log("====================");
    for( var i=0 ; i<nama.length ; i++ ){
        if(nama.length % i === 0){
            console.log (nama[i]);;
        }
    }
    console.log("memunculkan nama hanya pada indeks prima dengan secara dinamis dengan looping dan conditional if, indeks dimunculkan dengan cara membuat pengkondisian dimana indeks apabila bisa dibagi dengan bilangannya sendiri hasilnya sama dengan nol maka indeknya bisa ditampilkan sedangkan yang lain disembunyikan");
    console.log("====================");
        for( var i = nama.length-1 ; i >= 0 ; i-- ){
            if(i % 2 !== 0){
                console.log (nama[i]);;
            }
        }
    console.log("memunculkan nama hanya pada indeks ganjil dengan dinamis oleh looping dan conditional if, indeks dimunculkan dengan cara membuat pengkondisian dimana indeks apabila bisa dibagi dengan bilangan nol hasilnya sama dengan nol maka indeknya bisa ditampilkan sedangkan yang lain disembunyikan");
    console.log("====================")

    var tampung2 = '';
    var tampung3 = '';
    for( var i=0 ; i<5 ; i++){
        console.log(nama[i])
    }
    for( i; i<nama.length ; i++){
        tampung2 = tampung2 + nama[i] ;
    }
    //console.log( tampung2 );
    for( j=tampung2.length-1 ; j>=0 ; j--){
        tampung3 += tampung2[j];
    }
    console.log(tampung3);
    
    console.log("memunculkan nama dengan memenggal beberapa bagian dan membalikan kata berikutnya dengan membuat looping sebanyak 3x");
    console.log("====================")
    var tampung4 = '';
    for( i=0 ; i<5 ;i++){
        console.log(nama[i])
    }
    for( j=nama.length-1 ; j>=i ; j--){
        tampung4 += nama[j];
    }
    console.log(tampung4)

