/*
FOR targetArr dari index 0 ke index akhir
  IF operator sama dengan '-' THEN
    targetArr ke i dikurangi effect
  ELSE IF operator sama dengan '+' THEN
    targetArr ke i ditambah effect
  ELSE IF operator sama dengan '/' THEN
    targetArr ke i dibagi effect
  END IF
END FOR

IF operator sama dengan '-' THEN
  KEMBALIKAN targetArr
ELSE IF operator sama dengan '+' THEN
  KEMBALIKAN targetArr
ELSE IF operator sama dengan '/' THEN
  KEMBALIKAN targetArr
*/

function arrayMapper(targetArr, operator, effect) {
    // only write code here
    for(var i=0; i<targetArr.length; i++){
      if(operator==='-'){
        targetArr[i] -= effect
      } else if(operator==='+'){
        targetArr[i] += effect
      } else if(operator==='/'){
        targetArr[i] /= effect
      } 
    }
    if(operator === '-'){
      return targetArr
    }else if(operator === '+'){
      return targetArr
    }else if(operator === '/'){
      return targetArr
    }
  }
  
  console.log(arrayMapper([1, 2, 3, 4, 5], '-', 3)); // [-2, -1, 0, 1, 2]
  console.log(arrayMapper([1, 5, 3, 4], '+', 1)); // [2, 6, 4, 5]
  console.log(arrayMapper([8, 4, 2, 10], '/', 2)); // [4, 2, 1, 5]