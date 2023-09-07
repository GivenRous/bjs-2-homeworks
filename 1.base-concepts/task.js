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
  let monthPercent = percent / 100 / 12;
  let debt = amount - contribution;

  let monthAmount = debt * (monthPercent + (monthPercent / (((1 + monthPercent) ** countMonths) - 1)));
  let totalAmount = monthAmount * countMonths;
  return +totalAmount.toFixed(2);
  }

calculateTotalMortgage(10, 1000, 20000, 24);