"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let dis = b ** 2 - 4 * a * c;
  if (dis > 0) {
    let r1 = (-b + Math.sqrt(d)) / (2 * a);
    let r2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(r1, r2);
  } else if (dis === 0) {
    let r1 = -b / (2 * a);
    arr.push(r1);
  }
  return arr;
}

solveEquation(1, 5, 4);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}