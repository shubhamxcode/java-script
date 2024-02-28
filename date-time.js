// DATE(OBJECT TYPE)
let mydate=new Date()//agar new hatayenge to indian time me dega time and date
console.log(mydate)
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleTimeString())


// date and time declaration
yy/mm//dd

let mynewdate= new Date(2024,2,2)//0 se start hoti hai month
let newdate= new Date(2024,2,2,9,6)
console.log(newdate.toDateString())
console.log(newdate.toLocaleString())
console.log(newdate.toLocaleString('en-in'))
console.log(newdate.toLocaleDateString())
mm//dd//yy
let indd=new Date("3-6-2024")//01 se start hoti hai month
console.log(indd.toLocaleString())

let inddd = new Date("2024-03-06:06:00");
console.log(inddd.toLocaleString());
