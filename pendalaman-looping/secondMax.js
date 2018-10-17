function secondLargest(number){
    console.log('=================================');
    console.log('   merubah angka menjadi array   ');
    console.log('=================================');

    var numStr = String(number);
    var arr = [];
    for( i = 0; i<numStr.length ; i++){
        arr.push(Number(numStr[i]))
        console.log(arr) 
        
    }
    console.log('=================================');
    console.log('      hasil yang didapatkan      ');
    console.log('=================================');
    console.log(numStr)
    console.log('=================================');
    console.log('   proses menyortir secara manual');
    console.log('=================================');
    var number2 = arr
    for(var i = 0; i < number2.length; i++) {
        var terkecil = number2[i]
        for(var j = i + 1; j < number2.length; j++) {
            if(number2[j] < terkecil) {
                var temp = number2[i]
                terkecil = number2[j]
                number2[i] = number2[j]
                number2[j] = temp
                console.log(number2)
            }
        }
    }
    console.log('=================================');
    console.log('      hasil yang didapatkan      ');
    console.log('=================================');
    return number2
    
}
console.log('=================================');
console.log(secondLargest(8365697867567935));

