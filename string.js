const name='shubham';
console.log(typeof(String))
const skill=100;
console.log(`my name is ${name} and my skills are ${skill}`)//backtish syntax mainly use 

const gamename=new String('error')
console.log(gamename)//specially define kar dega ki ye string hai 

const game='shubham'
console.log(game.length)
console.log(game[0])
console.log(game.__proto__)//Every object in JavaScript has a built-in property, which is called its prototype
console.log(game.toUpperCase())
console.log(game.toLowerCase())
console.log(game.charAt(4))//it tells about letter of string
console.log(game.indexOf('h'))//it tells about position of string
const varshney=game.substring(0,4)//0,3 tak jayega//but we cannot use -ve sign
console.log(varshney)
const developer=game.slice(-5,4)//we can use negative value aonsole.log(addtwo())//we cannot acces before declaration when we declare in variable
// const addtwo=function(num){
//     return num+1
// }s well
console.log(developer)
const newstring='  shubham  '
console.log(newstring)
console.log(newstring.trim())//it remove the unwanted spaces//it only work in white spaces not in line terminators(/n)

const url='https://shubham.com/shubham100% varshney '
console.log(url.replace('shubham','varshney'))//shuabham ki jagah varshney replace kar dega//we can use it to remove space also
console.log(url.includes('sundar'))//it tells about does sundar exit or not

const world='shubham-varshney-coding'
console.log(world.split('-'))//- hata dega and array me convert kar dega
