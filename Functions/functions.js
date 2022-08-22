console.log("Hello!!!");
const hello = () => {
    console.log("Hello how are you , thanks")
}

function avg(x, y) {
    console.log("Done");
    return 10 + (x + y) / 2

}
let a = 7;
let b = 8;
let c = 6;

console.log("The avg of a and b is ", avg(a, b));
console.log("The avg of a and c is ", avg(a, c));
console.log("The avg of b and c is ", avg(b, c));
hello();

// Arrow functions 

// const name = ()=>{

// }

const sum = (a, b) => {
    return (x + y)
}
let x = 5;
let y = 10;

// console.log("the sum of x and y is " , sum(a,b));
let sv = sum(a, b);
console.log(sv);


// mean of 5 numbers 

let mean = (a, b, c, d) => {
    return (a + b + c + d) / 4
}
console.log("The mean f the numbers are " + mean(2, 3, 4, 5));