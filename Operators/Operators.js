console.log("rohit!!")
77;
let a = 2;
let b = 3;

console.log("a + b is ", a + b);
console.log("a - b is ", a - b);
console.log("a * b is ", a * b);
console.log("a + b is ", a + b);
console.log("a++ is ", a++)
console.log(a);

// Assignment operators 
console.log(a);
a += 5;
console.log(a);

// comparison operator 

let comp1 = 6;
let comp2 = '6';
console.log("comp1 == comp2 is ", comp1 == comp2);

console.log("comp1 === comp2 is ", comp1 === comp2);

// logical operators as they operate on booleans 

let x = 5;
let y = 6;

console.log(x > y && x == 7);

// conditional expressions 

// let a1 = prompt("Please let me know your age ");
// console.log(typeof a1 );

// a1 = Number.parseInt(a1);
// console.log(typeof a1);

// if (a1<0){
//   alert("This is not a  vaild age");
// }
// else if(a1 < 9) {
//   alert("do not drive car");
// }
// else if(a1>=9 && a1<18){
//   alert("you can drive");
// }
// else{
//   alert("Done");
// }

// Ternary operator 

// console.log("you can" , (a1<18 ? "not drive" : "drive")); 

let age = prompt("what is your age?");
switch (age) {
    case '12':
        console.log("your age is 12")
        break

    case '13':
        console.log("your age is 13")
        break

    case '14':
        console.log("your age is 14")
        break
    case '15':
        console.log("your age is 15")
        break
    default:
        console.log("No age ");
        break
}