// for of loop
const greetings="Hello World!"
for (const greet of greetings) {
    if(greet==" "){
        continue
    }
    //console.log(`gretings are ${greet}`)
}

// maps(unique value)
const map=  new Map()
map.set('in','india')
map.set('fr','franch')
console.log(map)

for (const [k,v] of map) {
    // console.log(k)//it give out put in array 
    console.log(k,"_",v)
    
}


const myobj={//for in loops use for object and other as well to excess key value pairs
    js:'javascript',
    py:'python',
}
for (const key in myobj) {
    console.log(`${key}-for ${myobj[key]}`);
}

const programming=['py','html','j.s','css']
for (const key in programming) {
    console.log(programming[key])
}

const maps=  new Map()
map.set('in','india')
map.set('fr','franch')
for (const key in maps) {
    console.log(key)
}//map are not iterable so we cannot excess it by forin loop