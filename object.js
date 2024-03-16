// // singleton 
// // object literals 
const user2=Symbol('key1')
const user={
    name:'shubham',//key are taken as string 
    age:18,
    emailid:'0231ite125@gmail.com',
    "sername":"shubham varshney",
    [user2]:'key1',// this is the currect syntax for sybol it take as a key
}
// console.log(user.emailid)//we can accese by this method but this is not the right method do accese object 
// console.log(user['emailid'])//currect method
console.log(user.sername)//key me jab space ke sath hum variable declare karte hai to axcess nhi hota .use kar ke 
console.log(user[user2])
console.log( typeof user[user2])

user.emailid='shubhamvarshney@gmail.com'
// Object.freeze(user)
user.name='varshney'
console.log(user)

user.greting=function(){
    console.log('hello world')
}
console.log(user.greting)//funtion[annonymous] it means fuction exicude nahi hua hai bus fuction ka refrence aaya hai
console.log(user.greting())//

user.gretingtwo=function(){
    console.log(`${this.name}`)//this is reference of name 
}
console.log(user.gretingtwo())