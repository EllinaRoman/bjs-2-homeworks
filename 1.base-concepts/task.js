"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = (b**2 - 4 * a * c);
  if (d === 0) {
    arr.push(-b/(2*a));
  } else if (d > 0) {
    arr.push((-b + Math.sqrt(d) )/(2*a));
    arr.push((-b - Math.sqrt(d) )/(2*a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyRate = percent / 1200; 
  let creditBody = amount - contribution; 
  let monthlyPayment =  creditBody * (monthlyRate + (monthlyRate / (((1 + monthlyRate) ** countMonths) - 1)));
  let totalPayment = Math.round(monthlyPayment * countMonths * 100) / 100;
  return totalPayment;
}