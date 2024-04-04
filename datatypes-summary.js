//primitive datatypes(call by value)(copy me changes hote hai)
//7 types: string ,boolean,number,symbols,undefine,bigint,null

//non primitive(reference)
//3types:arrays,function,object

const id=Symbol(28)
console.log(id===anotherid)
const anotherid=Symbol(28)
console.log(anotherid===id) //there  return values are different

// const bignum=123312123232312321311312313131123131313131323242323n

//non primitiv
//ARRAY
const hero=['skatiman','indian army']//array are in square bracket
//OBJECT
// {
//     name:"shubham"
//     age:18
// }
//or we can align in variable
let identity ={
    name:"shubham",
    age:18,
}
// let myfunction=function(){
//     console.log('hello world')
// }
