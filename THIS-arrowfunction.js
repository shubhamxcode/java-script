// const user ={
//     username:"shubham",
//     price:999,
//     welcomemessage:function(){
//         console.log(`${this.username},welcome to my website`)
//         // console.log(this)
//     }
// }
// user.welcomemessage()
// user.username=" varshney "
// user.welcomemessage()
// console.log(this)//{}empty becouse in globar object there is no value ......this only work for current context
//in browser global object is window object and in node it is empty object 


// function chai(){//we can not use this. method we can use in object 
//     let username="shubham"
//     console.log(this.username)
// }
// chai()
// const chai=function (){//we can not use this. method we can use in object 
//     let username="shubham"
//     console.log(this.username)
// }
// chai()

// Arrow function
const tea=(num1,num2)=>{
return num1+num2
}
console.log(tea(2,2))

const adding=(num2,num3)=> (num2+num3)//we dont need to use return like in this syntax and this is callled implicite return
console.log(adding(23,22))


const users=()=>({username:"shubham"})//for declation of object we use()paranthieses
console.log(users())
