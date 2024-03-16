//  const score=800
//  console.log(score)

// const value=new Number(900)
// console.log(value)
// console.log(value.toString().length)//number string me convert ho jayega then hum string ki property applly kar skate hai
// console.log(typeof(value))
// console.log(value.toFixed(2))//agge 2 zero laga dega 

// const othernumber=8823.22
// console.log(othernumber.toPrecision(4))//(round off kardega)it range from 1 to 21 and return value will we in strig

// const largezero=5000000
// console.log(largezero.toLocaleString('en-in'))//default value usa and we make it indian

// console.log(Number.MAX_VALUE); // Outputs: 1.7976931348623157e+308
// console.log(Number.MIN_VALUE); // Outputs: 5e-324
// console.log(Number.MIN_SAFE_INTEGER); // Outputs: -9007199254740991
// console.log(Number.MAX_SAFE_INTEGER); // Outputs: 9007199254740991


// //+++++++++++++++++++++++++++++++++//MATH++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-8))//-ve to +ve
console.log(Math.round(7.99))
console.log(Math.ceil(7.22))//top ko round off karega 
console.log(Math.floor(7.99))//bottom ko round off karega (7 ka 7 rahega)
console.log(Math.sqrt(25))//squar root
console.log(Math.pow(2,2))
console.log(Math.max(10,5))
console.log(Math.min(10,5))



console.log(Math.random())//gives value between 0 to 1
console.log(Math.floor((Math.random()*10))+1)

const min=10
const max=30
console.log(Math.floor((Math.random()*(max-min+1)))+min)


