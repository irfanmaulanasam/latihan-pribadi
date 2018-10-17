console.log('-----------------------------------')
console.log('merubah angka menjadi string dan memisahkannya dalam bentuk array')
console.log('-----------------------------------')
var num = 43281;
var arr = String(num) .split('');
    for( i=0 ; i<arr.length; i++){
        console.log(arr[i])
    }
console.log('-----------------------------------')
console.log('membalikkan urutan angka dari ujung ke awal yang telah dirubah menjadi array')
console.log('-----------------------------------')
    for( i = arr.length-1 ; i>=0 ; i--){
        console.log(arr[i])
    }
console.log('-----------------------------------')
console.log('mencari angka terkecil dari array number dengan pembanding secara langsung')
console.log('-----------------------------------')
    var pembanding = 8;
    for( i=0 ; i<arr.length ; i++){
        if( arr[i]<pembanding ){
            pembanding = arr [i];
        }
    }
    console.log(pembanding);
    console.log('-----------------------------------')
    console.log('mencari angka terbesar dari array number dengan pembanding memakai hasil angka terkecil')
    console.log('-----------------------------------')
    var pembanding2 = pembanding;
    for( i=0 ; i<arr.length ; i++){
        if( arr[i]>pembanding2){
            pembanding2 = arr [i] ;
        }
    }console.log(pembanding2)
    console.log(pembanding);
    console.log('-----------------------------------')
    console.log('mencari angka median dari array number dengan pembanding memakai hasil angka terkecil')
    console.log('-----------------------------------')
    var medianGanjil = ( arr [( arr.length -1 ) / 2 ]); 
    var medianGenap = ( (arr [ arr.length / 2-1 ]+ arr [ arr.length /2 ])/2);
        if( arr.length % 2 == 0 ){
            console.log(medianGenap) ;
        }else{
            console.log(medianGanjil);
    }
    