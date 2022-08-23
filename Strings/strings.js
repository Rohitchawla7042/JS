/*
console.log("Rohit")

let marks = (a,b,c,d)=> {
  return (a+b+c+d)
}
console.log("The marks are " + marks(2,3,4,5))

//  Strings 

let name = 'Rohit'
console.log(name.length)
console.log(name[2])

// Template literals 

let boy1 = "Rock"
let boy2 = "Hell"

let sentence = `${boy1} is a friend of ${boy2}`
console.log(sentence)



let obj = {
  rohit :87,
  naman :98,
  kkk:980
}

for (let i = 0; i < Object.keys(obj).length ; i++){
  console.log("The marks of " + Object.keys(obj)[i] + " are " + obj[Object.keys(obj)[i]]);
  
}

// Escape sequece character \ => this is the escape sequence character

let fruit = "Banana\'s'"
console.log(fruit)
*/

// Strings methods 

let name = "Rohit"
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())

//  Indexing 
// slicig means trim that it will start from 2 and it will go to 5 , but it will not include 5 

console.log(name.slice(2, 5))

console.log(name.replace("Ro", "kk"))
let name1 = "Naman"
console.log(name.concat(" is a friend of ", name1))
console.log(name + " is a friend of " + name1)
//  Trim will remove the space from front and last 
let name2 = "              TTTT      "
console.log(name2.length)
console.log(name2.trim().length)

let fr = "Chawla"
// for (let i in fr){
//   console.log(fr[i])
// }
for (i = 0; i < fr.length; i++) {
    console.log(fr[i])
}

// Practice set 

// WAP to get the amount from the string 

let str = "Please give me 1000"
let amount = str.slice("Please give me ".length)
console.log(amount)

let rep = "Rohit"
console.log(rep.replace("R", "T"))
console.log(rep.replace(rep[3], "o"))