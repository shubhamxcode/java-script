// function saymyname(){
//     console.log('s')
//     console.log('h')
//     console.log('u')
//     console.log('b')
//     console.log('h')
//     console.log('a')
//     console.log('m')
// }
// saymyname()

// function addtwonumbers(num1,num2){//num1 and num2 are paramiters))
//     console.log(num1+num2)

// }
// addtwonumbers(3,null)//arguments
// function addtwonumbers(num1,num2){//num1 and num2 are paramiters
//     let result=num1+num2
//     return result
//     console.log('shubham')//it does not exicude couse the function return value already declare once
// }
// const returnvalue=addtwonumbers(4,3)
// console.log(returnvalue)


// function loginusermessage(username){
//     if(username===undefined){
//         console.log("please enter your username")
//     }
// }
// console.log(loginusermessage())
// // // undefine in if statement taken as false value and (!)are use to convert false value into true value and true value convert into false value 
// function loginusermessage(username= "sam"){
//     if(!username){
//         console.log("please enter your username")
//     }
//     return `${username} just looged in `
// }
// console.log(loginusermessage())


// function calculatecartprice(var1,var2,...num){//... called rest operator
//     return num
// }
// console.log(calculatecartprice(200,300,400))

// const users={
//     username:"shubham",
//     price:3242
// }
// function army(system){
//     console.log(`username is ${system.username} and price is ${system.price}`)
// }
// army(users)
// // const handle=user
// army({
//     username:"shubh",
//     price:800
// })

const myarray=[2143,2342,23]

function returnsecondvalue(getarray){
    return getarray[2]
}
console.log(returnsecondvalue([21232,232,32]))
console.log(returnsecondvalue(myarray))