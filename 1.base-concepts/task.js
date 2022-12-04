"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let rootFirst;
  let rootSecond;
  let d = Math.pow(b, 2) - 4 * a * c;

   if (d === 0){
    rootFirst = -b / (2 * a);
    arr.push(rootFirst);
    console.log(arr);
  }
  else if (d > 0) {
    rootFirst = (-b + Math.sqrt(d) ) / (2 * a);
    rootSecond = (-b - Math.sqrt(d) ) / (2 * a);
    arr.push(rootFirst);
    arr.push(rootSecond);
    console.log("Первый корень = " + arr[0] + "Второй крень = " + arr[1]);
  }
  
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthPercent;
  let bodyCredit;
  let monthPayment;
  let sumAmount;

  if (
    isNaN(percent) ||
    isNaN(contribution) ||
    isNaN(amount) ||
    isNaN(countMonths) 
  ) {
  console.log ( "Некорректные данные");
  return false;
  }

  monthPercent = (percent / 100) / 12;
  bodyCredit = amount - contribution;
  monthPayment = bodyCredit * (monthPercent + (monthPercent / ((Math.pow((1 + monthPercent), countMonths)) - 1)));
  sumAmount = parseFloat((monthPayment * countMonths).toFixed(2));

  return sumAmount;
  
  
}