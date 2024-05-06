/*
Numbers Which Sum of Powers of Its Digits Is The Same Number

DESCRIPTION:
Not considering number 1, the integer 153 is the first integer having this property: the sum of the third-power of each of its digits is equal to 153. Take a look: 153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153

The next number that experiments this particular behaviour is 370 with the same power.

Write the function eq_sum_powdig(), that finds the numbers below a given upper limit hMax (inclusive) that fulfills this property but with different exponents as the power for the digits.

eq_sum_powdig(hMax, exp): ----> sequence of numbers (sorted list) (Number one should not be considered).

Let's see some cases:

eqSumPowdig(100, 2) ----> []

eqSumPowdig(1000, 2) ----> []

eqSumPowdig(200, 3) ----> [153]

eqSumPowdig(370, 3) ----> [153, 370]
SOLUTION: 
*/
function eqSumPowdig(hMax, exp) {
  const result = [];
  
  for (let num = 1; num <= hMax; num++) {
    const sum = num.toString().split('').reduce((acc, digit) => acc + Math.pow(parseInt(digit), exp), 0);
    if (sum === num) {
      result.push(num);
    }
  }
  
  return result.slice(1).sort((a, b) => a - b);
}
