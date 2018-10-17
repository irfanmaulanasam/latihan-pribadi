// asterisk bendera 
function benderaNarsis(name){
var bahan = name.split(' ')

    for( i=0 ; i<bahan[0].length ; i++){
        var depan = bahan[0][i];
        // console.log(depan)
    }
   
    for( var row = 0; row < depan.length;row++){
        var x = '';
        for( var col = 0; col <= row; col++) {
            var y = depan[col];
        } 
        // console.log(bintang)
    } 
    //     for(var row = 2; row < 5;row++){
    //         var bintang = '';
    //         for(var col = 0; col <= row; col++) {
    //             bintang += '* ';
    //         } console.log(bintang)
    //     } 
    // }
    return y;
}
// for( var row = 0; row < bahan[i][0].length;row++){
//   var bintang = '';
//   for( var col = 0; col <= row; col++) {
//     bintang += '* ';
//   } console.log(bintang)
// } 
// for(var row = 2; row < 5;row++){
//   var bintang = '';
//   for(var col = 0; col <= row; col++) {
//     bintang += '* ';
//   } console.log(bintang)
// } 
console.log(benderaNarsis('irfan maulanasam'));
