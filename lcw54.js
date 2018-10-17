/*
1. mencari angka terbesar dari deret 1
2. mencari angka terbesar dari deret 2
3. membandingkan angka terbesar deret 1 dan angka terbesar deret 2
4. mencari angka terkecil dari angka terbesar 1 dan angka terbesar 2
*/

function lowestLocalMaximum(firstArr, secondArr) {
    // only write code here
    var firstAwal = firstArr[0]
    var secondAwal = secondArr[0]
    for(var i=0; i<firstArr.length; i++){
      if(firstAwal<firstArr[i]){
        firstAwal=firstArr[i]
      }
    }
    for(var j=0; j<secondArr.length; j++){
      if(secondAwal<secondArr[j]){
        secondAwal=secondArr[j]
      }
    }
    if(firstAwal<secondAwal){
      return firstAwal
    }else{
      return secondAwal
    }
  }
  
  console.log(lowestLocalMaximum([1, 1, 1] , [8, 15, 17, 9])); // 1
  console.log(lowestLocalMaximum([4, 8, 9, 12] , [33, 88, 99 ,11])); // 12`
  console.log(lowestLocalMaximum([1, 2, 5, 2, 2] , [67, 45, 55])); // 5
  console.log(lowestLocalMaximum([6, 2, 4, 10, 8, 2] , [6, 5, 13, 23])); // 10
  console.log(lowestLocalMaximum([5, 11, 18, 6], [3, 1, 8, 13])); // 13