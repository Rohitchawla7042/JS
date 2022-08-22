/*  For loops 
for (let i = 1 ; i<=6 ; i++){
  console.log(i)
}

 Sum of first n natural nus 

let sum = 0;
let num = prompt("Enter number till which you want sum"); 
for (let i = 0;i < num ; i++){
  sum += (i+1);
}
console.log("The Sum of " + num + " natural number is " + sum)

 factorial 

let fact = 1; 
let n = prompt("Please enter the nu for which you want to find factorial")

for (let i = 1; i<=n ; i++){
  fact *= i;
}
console.log("the factorial of the " + n + " is " + fact)


//  For in loop it is used to print the keys  

 let obj = {
   rohit: 89,
   aondn: 99,
   diefiuewgf: 55,
   vbjbvvjvbi: 87
 }
for ( let a in obj){
  // console.log(a);
  console.log("Marks of " + a + " are " + obj[a])
}

// let is the block level scope , it will be open only in the same loop only but var is opposite of the let . 
*/

//  While loops 

// let n = prompt("Enter the nu")

// let i = 0; 
// while(i<n){
//   console.log(i);
//   i++;
// }

//do while loop

let n = prompt("Enter the nu")

let i = 0;
do {
    console.log(i);
    i++;
} while (i < n)

// so do-while loop , will always run for one time , as it will definatey give one ans and will not check the condition as in do-while first the block will run and check for condition 

console.log("Hello!!")

/*
let obj = {
  harry : 98,
  rohanm : 70, 
  aakash:7
}

for (let i = 0; i<Object.keys(obj).length ; i++ ){
  console.log("The marks of " + Object.keys(obj)[i] + " are " + obj[Object.keys(obj)[i]]) ;
}


let marks = {
  rohit: 90,
  naman: 98,
  kkk :76
}
  for (i = 0; i<Object.keys(marks).length; i++){
  console.log("the marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
  }

for (let b in marks){
  console.log("The marks of " + b + " are " + marks[b])
  
}

let correctnum = 98; 
let number = prompt("Please enter a number")

if (number == correctnum){
  console.log("You had find out the perfect nu that is " + correctnum)
}

else{
  console.log("Try Again!!")
}
*/
let cn = 89 ; 
let i ; 
while(i!=cn){
  i = prompt("Enter a number")
  console.log("Try Again!!")
}
console.log("You have gussed the right number that is " + cn)
