// const array=[2,3,332,23,43,true,'shubham']//0 se start hota hai
// console.log(array[0]) 
// //mutable,object type 
// //array copy operation
// (1)shallow copy ( original copy) just like heap
// (1)deap copy ( nonoriginal copy) just like stack

// const array2= new Array(23,23,2)
// console.log(array2[2])

// const myaaray=[1,2,3,4,5,6]
// myaaray.push(33)
// myaaray.pop()//last value ko remove kar dega 
// console.log(myaaray)
// myaaray.unshift(9)//starting me 9 ko add kar dega 
// myaaray.shift()//starting me se 9 ko remove kar dega 
// console.log(myaaray)
// console.log(myaaray.includes(6))//gives value in bollean 
// console.log(myaaray.indexOf(3))// agar value hogi to bo position bata dega.. agar value exist nahi karti to -1 show karega 

// const newarrray=myaaray.join()
// console.log(newarrray)//output string me dega and datatype bhi string ban jayega 

// // slice and splice 

const myaarays=[1,2,3,4,5,6]
console.log('A', myaarays)
const my1= myaarays.slice(1,3)//3 include nhi hoga 
console.log(my1)
console.log('B', myaarays)
const my2=myaarays.splice(1,3)//3 include hoga 
console.log('c',myaarays)
console.log(my2)
// interviw q( difference between slice and splice )
// in slice does not increase range 
// in splice splice part are remove 

