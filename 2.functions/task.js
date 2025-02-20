function getArrayParams(...arr) {
  let min = arr[0];
  let max =arr[0];
  let sum = 0;
  let avg;  
  for (let i=0; i < arr.length; i++) {
    if (arr [i] > max){
      max = arr[i];
    }
    else if(arr[i] < min){
      min = arr[i];
    }
    sum += arr[i];
  }
  avg = parseFloat ((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = arr[0];
  let max = arr[0];
  let diff = 0;
  if (arr.length <= 1) {
    diff = 0;
    return diff;
  }
  for (let i = 0; i < arr.length; i++) {
    if(arr [i] > max){
      max = arr[i];
    }
    else if(arr[i] < min) {
      min = arr[i];
    }
    
}
return max - min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let diff = 0;
  if (arr.length <= 1) {
    diff = 0;
    return diff;
  }
 for (let i = 0; i < arr.length; i++) {
  if ((arr[i] % 2 === 0)){
    sumEvenElement += arr[i];
  }
    else {

      sumOddElement += arr[i];
  }
}
  return sumEvenElement - sumOddElement;
 }



function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
 let countEvenElement = 0;
  if (arr.length <= 1) {
    let result = 0;
    return result
  }
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] % 2  === 0)){
      sumEvenElement += arr[i];
      countEvenElement ++ ;

    }
  }
    return sumEvenElement / countEvenElement;
  }


function makeWork (arrOfArr, func) {
let maxWorkerResult = -Infinity;
for (let i = 0; i < arrOfArr.length; i++) {
  const result = func(...arrOfArr[i]);
  if (result > maxWorkerResult) {
    maxWorkerResult = result;
  }
}
return maxWorkerResult;
}
