/* Kadane's Algorithm is typically used to find the maximum sub-array
*  in this example a list of stock prices is used, and we will do the following:
*  Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
*/
const prices = [7,1,5,3,6,4]
let min = Infinity;
let max = 0;
for (let price of prices) {
    min = Math.min(min, price);
    max = Math.max(max, price - min);
}
console.log(max); // logs 5 
