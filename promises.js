// //Q andBluebird are the libray of promises 
// //promises creating 
// const promisesone=new Promise(function(resolve,reject){//it just parameter we can take another name and call it 
//     //do an async task
//     //DB calls,cryptography,network
//     setTimeout(() => {
//         console.log("Async task is compleate")
//         resolve()
//     },1000);
// })
// //promise consumed
// promisesone.then(function(){//then direact connection with resolve
//     console.log("promises consumed")
// })
// const promisestwo=new Promise(function(resolve,reject){//it just parameter we can take another name and call it 
//     setTimeout(() => {
//         console.log("Async-2 task is compleate")
//         resolve()
//     },1000);
// }).then(function(){
//     console.log('promise consumed-2');
// })
// const proprmisesthree=new Promise(function(resolve,reject){//it just parameter we can take another name and call it 
//    setTimeout(() => {
//       resolve({username:'shubham',email:'shubh.code@gmial.com'})//we also use array
//     },1000);
// })
// proprmisesthree.then(function(user){
//     console.log(user)
// }).then(()=>{
//     console.log("shubham varshney")
// }).catch(()=>{
//     console.log('error')
// })
// console.log(proprmisesthree)//pending

const { default: axios } = require("axios");
const { load } = require("cheerio");

const promisefour=new Promise(function(resolve,reject){
    let error=true;
    if (!error) {
        resolve({username:'shubhamvarshney',password:123})
    }else{
        reject("error:404")
    }
})
 promisefour
 .then(function(user){
    console.log(user)
    return user.username
 }).then((username)=>{
    console.log(username);
 }).catch((error)=>{
    console.log("error hai bhai " ,error);
 }).finally(()=>{
    console.log("papa is great ");
 })


const promisefive=new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error=true
        if (!error) {
            resolve({username:"shubham varshney",email:"shubh.varshney@gmail.com"})
        }else{
            reject('error:410')
        }
    },1000)
})

// async function consumedpromesefive(){
//     try {
//     const response=await promisefive
//     console.log(response);
//     console.log('varshney');
//     } catch (error) {
//         console.log(error);
//         console.log('shubham');
//     }
// }
// consumedpromesefive()

// async function getuserdata(){
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         const data= await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log('error hai bhai kya kare jindgi me ',error)
//     }
// }
// getuserdata()

// fetch('https://reqres.in/api/user')
// .then((resolve)=>{
//     return resolve.json()
// }).then((e)=>{
//     console.log(e)
// }).catch((error)=>{
//     console.log("error",error)
// })

