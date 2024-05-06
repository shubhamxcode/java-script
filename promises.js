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
// const promisesthree=new Promise(function(resolve,reject){//it just parameter we can take another name and call it 
//     setTimeout(() => {
//         resolve({username:'shubham',email:'shubh.code@gmial.com'})//we also use array
//     },1000);
// })
// promisesthree.then(function(user){
//     console.log(user)
// })

const promisefour=new Promise(function(resolve,reject){
    let error=false
    if (!error) {
        resolve({username:'shubhamvarshney',password:123})
    }else{
        console.log("error:404")
    }
})
promisefour.then(function(user){
    console.log(user)
    return user.username
}).then(function(sher){
    console.log(sher)
}).catch(function(error){
    console.log(error)
}).finally(()=>{//defalut
    console.log("the promise either resolve or reject")
})