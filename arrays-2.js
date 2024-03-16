const marvel=['spiderman','thor','ironman']
const dc=['batman','flash','superman']
marvel.push(dc)
console.log(marvel)//it took as a array as a data
console.log(marvel[3][2])
const allheroes=marvel.concat(dc)//new variable declare karna padega pehle to use concate 
console.log(allheroes)//it combine two arrays

const newhero=[...marvel,...dc]// easy way 
console.log(newhero)

const arayinaray=[2,21,2,[13,2,3],23,2,[21,22],2,[6,54,3]]
const newarrray=arayinaray.flat(Infinity);//where 2 is called depth and we can use infinity as well it take automatic calculated depth
console.log(newarrray)

console.log(Array.isArray('shubham'))//false
console.log(Array.from('shubham'))//change into array in parts
console.log(Array.from({name:'shubham'}))//it show []empty couse got consfuse key ko array banu ya value ko (name -key)(shubham-variable)


const score1=232
const score2=232
const score3=232
console.log(Array.of(score1,score2,score3))
