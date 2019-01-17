let sum = 0;
let numbers = [1,2,3,4,5]

//Increase all numbers by 1 and all even numbers to sum.

//Imperative way
for(let i = 0; i < numbers.length; i++){
    numbers[i] = numbers[i] + 1;

    if(numbers[i] % 2 === 0){
        sum = sum + numbers[i];
    }
}

console.log(sum);

sum = 0;
numbers = [1,2,3,4,5]

//Declarative way
let increased = numbers.map((n) => {return n + 1;});
let even = increased.filter((n) => {return n % 2 === 0})
sum = even.reduce((acc,n) => {
    return acc + n;
})
console.log(sum);

//Chaining functions
sum = numbers.map((n) => {return n + 1;})
    .filter((n) => {return n % 2 === 0})
    .reduce((acc,n) => {return acc + n;},0)

console.log(sum);

//Clean up code
const addOne = (n) => {return n + 1;}
const isEven = (n) => {return n % 2 === 0};
const add = (acc,n) => {return acc + n;};

sum = numbers.map(addOne)
    .filter(isEven)
    .reduce(add, 0);

console.log(sum);

