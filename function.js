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

// // function addtwonumbers(num1,num2){//num1 and num2 are paramiters
// //     console.log(num1+num2)

// // }
// // addtwonumbers(3,null)//arguments
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
//         return
//     }
// }
// console.log(loginusermessage())
//username in if statement taken as false value and (!)are use to convert false value into true value and true value convert into false value 
function loginusermessage(username= "sam"){
    if(!username){
        console.log("please enter your username")
        return
    }
    return `${username} just looged in `
}
console.log(loginusermessage())
