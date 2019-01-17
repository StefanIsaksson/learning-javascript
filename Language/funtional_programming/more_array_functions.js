prices = [1,2,3,4,5,6,7,8,9]

let sum_of_prices=0;
for(let i = 0; i < prices.length; i++){
    sum_of_prices = sum_of_prices + prices[i];
}
console.log(sum_of_prices);

let also_sum_of_prices = prices.reduce((acc, n) => {
    return acc + n
}, 0);

console.log(also_sum_of_prices);
