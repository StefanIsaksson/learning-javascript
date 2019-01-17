const diff = (a,b) => (a - b);
const abs = Math.abs;

//Example of functional composition
result = abs(diff(1,2))
console.log(result);

//We can give the combined function a new name
const absolutDifference = (a, b) => {
    return  abs(diff(a,b))
}
result2 = absolutDifference(1,2);
console.log(result2);