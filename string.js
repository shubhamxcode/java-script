const name='shubham';
console.log(typeof(String))
const skill=100;
console.log(`my name is ${name} and my skills are ${skill}`)//backtish syntax mainlt use 

const gamename=new String('error')
console.log(gamename)

const game='shubham'
console.log(game.length)
console.log(game[0])
console.log(game.__proto__)
console.log(game.toUpperCase())
console.log(game.toLowerCase())
console.log(game.charAt(4))//it tells about letter of string
console.log(game.indexOf('h'))//it tells about position of string
const varshney=game.substring(0,4)//0,3 tak jayega
console.log(varshney)
const developer=game.slice(-5,4)//0,3 tak jayega
console.log(developer)
const newstring='  shubham  '
console.log(newstring)
console.log(newstring.trim())//it remove the unwanted spaces//it only work in white spaces not in line terminators(/n)

const url='https://shubham.com/shubham100% varshney '
console.log(url.replace('shubham','varshney'))//shuabham ki jagah varshney replace kar dega//we can use it to remove space also
console.log(url.includes('sundar'))//it tells about does sundar exit or not

const world='shubham-varshney-coding'
console.log(world.split('-'))//- hata dega and array me convert kar dega
