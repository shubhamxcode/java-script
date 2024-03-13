// // // // DATE(OBJECT TYPE)
// let mydate=new Date()//agar new hatayenge to indian time me dega time and date
// console.log(mydate)
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleTimeString())


// // date and time declaration
// // yy/mm//dd

let mynewdate= new Date(2024,2,2)//0 se start hoti hai 
console.log(mynewdate)

console.log(mynewdate.toLocaleString('en-in'))
// console.log(newdate.toLocaleDateString())
// // mm//dd//yy
// let indd=new Date("3-6-2024")//01 se start hoti hai month
// console.log(indd.toLocaleString()) 

// let inddd = new Date('2024,2,29');
// console.log(inddd.getMonth()+1);//0 se satrt ho raha hai
console.log(mynewdate.getDay()+1)//monday-0.......friday-4
// console.log(inddd.getFullYear());


// let hh=new Date(2024,3,5);
// console.log(hh.toLocaleString('default',{
//     weekday: 'short',//gives fri
//     weekday: 'long'//gives friday
// //we can give many factors... date r=numeric me chahiye ya kisi or me chahiye..etc
// }))