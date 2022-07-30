console.log("checking!!");
//boolean   
let hungry = false;

//string -: it is  a piece of character 

let a = typeof("87");

console.log(a);

let firstname = "Rohit"
let lastname = "Chawla"

let fullname = firstname + " " + lastname;

//string indexes

let b = "hello".length;

let mysong = "Hello World";

//strings are immutable , they can't be change 

//string methods

//to upper,tolower , trim 

let msg = "  hello how are you   "; 

console.log(msg.toUpperCase());

//trim will remove start and trail space that is end space , trim will not remove the space in mid 


let color = "       Purple                 hey     "

//color.trim()

//'Purple                 hey'; 

// msg.trim().toUpperCase()
//'HELLO HOW ARE YOU'

//index of means to find the index of any string 

let check = "NumberList"; 

// check.indexOf("List")
// 6

//slice is used to give the info of the string from one point to other point 

let name = "jsacbsacjsajasbcja";

// name.slice(4)
// 'bsacjsajasbcja'
// name.slice(2.6)
// 'acbsacjsajasbcja'
// name.slice(20)
// ''

//replace 

let str = "how are you "; 

// str.replace('are', 'we')
// 'how we you '


let quiz = "GARBAGE!"
// quiz.slice(2).replace('B' , '')
// 'RAGE!'

//string escape 

//  \n -> new line , \t -> tab 

let new1 = "hello";

// string tem plate literal 

// `` like this we have to mention teplate 

let temp = `I have ${1+3} sheeps `; 

let username = "rohit"; 
console.log(`Welcome ${username}`);

let item = "Phones"
let prize = 200000; 
let quantity = 87; 

console.log(`you have bought ${quantity} ${item.toUpperCase} worth $${prize*quantity}`); 

//nul; and undefined 

// null menas we intentionally doesn't give any value 
// and undefined means that we don't have an assigend value 


//math object 


// collection of maths const and functions 

// let col = Math.PI; 

let  rand = Math.floor(Math.random() * 6) + 2;

// typeof it is used to find the type of the number 

typeof 99 ; 

// typeof 99
// 'number'
// typeof true
// 'boolean'

//parseint and parsefloat 

// when we need to convert one datatype to another datatype 

let car = parseInt('29.7687462736877'); 
// here we convert float to int 

let carl = parseFloat('3877.8776');








