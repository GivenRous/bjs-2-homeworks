"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let dis = b ** 2 - 4 * a * c;
  if (dis > 0) {
    let r1 = (-b + Math.sqrt(dis)) / (2 * a);
    let r2 = (-b - Math.sqrt(dis)) / (2 * a);
    arr.push(r1, r2);
  } else if (dis === 0) {
    let r1 = -b / (2 * a);
    arr.push(r1);
  }
  return arr;
}

solveEquation(1, 5, 4);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let p = parseInt(percent) / 100 / 12;
  let con = parseInt(contribution);
  let am = parseInt(amount);
  let s = am - con;
  let n = parseInt(countMonths);

  if (isNaN(p) || p < 0) {
    return 'false';
  } else if (isNaN(con) || con < 0) {
    return 'false';
  } else if (isNaN(am) || am < 0) {
    return 'false';
  } else {
    let monthAmount = s * (p + (p / (((1 + p) ** n) - 1)));
    let totalAmount = monthAmount * n;
    return totalAmount.toFixed(2);
  }
}

calculateTotalMortgage(10, 1000, 20000, 24);
//не понимаю, почему тест выдает ошибку: Expected '52749.53' to equal 52749.53.
//проверяю typeof(totalAmount) - number