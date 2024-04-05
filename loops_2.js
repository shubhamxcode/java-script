// for of loop
const greetings="Hello World!"
for (const greet of greetings) {
    if(greet==" "){
        continue
    }
    console.log(`gretings are ${greet}`)
}

// maps(unique value)
const map=  new Map()
map.set('in','india')
map.set('fr','franch')
console.log(map)

for (const [k,v] of map) {
    // console.log([k])//it give out put in array 
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
    console.log(programming([key]))
}

const maps=  new Map()
map.set('in','india')
map.set('fr','franch')
for (const key in maps) {
    console.log(key)
}//map are not iterable so we cannot excess it by forin loop





// +++++++++++++++++++=for each loop[high order]+++++++++++++++++++++++++++++++++++++
const coding=['java','python','ruby','java script']
coding.forEach(function(elements){
    console.log(elements)
})

coding.forEach((elements)=>{
    console.log(elements)
})

function elvishyadav(system){
    console.log(system)
}
coding.forEach(elvishyadav)

coding.forEach((elements,index,arr)=>{
    console.log(elements,index,arr)
})

const mylanguage=[
    {
        filename:'j.s',
        file:'javascript'

    },
    {
        morefile:'j.s',
        yes:'javascript'

    },
    {
        filenames:'j.s',
        files:'javascript'

    }
]
mylanguage.forEach((item)=>{
    console.log(item.file)
})

const codingislove=['python','java','javascript','ruby','sql']
const shubham=codingislove.forEach((item)=>{
    // console.log(item);
    return item 
})
console.log(shubham)

const mynum=[1,2,3,4,5,6,7,8,9,10]
const merenumber=mynum.filter((item)=> item>4)
console.log(merenumber)

// 2nd method by for each

const nothing=[]
mynum.forEach((item)=>{
    if (item>4) {
        nothing.push(item)
    }
})

console.log(nothing)

const books=[
    {
        title:'book one',genre:'finction',publish:1981
    },
    {
        title:'book two',genre:'history',publish:1981
    },
    {
        title:'book three',genre:'science',publish:2000
    },
    {
        title:'book four',genre:'finction',publish:2001
    },
];

const mybooks=books.filter((Element)=>{
    return Element.genre ==='history'&& Element.publish===1981
    
})

console.log(mybooks)


const myallnum=[1,2,3,4,5,6,7,8,9,10]
const mynums=myallnum.map((num)=>{return num+10})
console.log(mynums)
chaining

const iplteam=[1,21,3,2,2,1,2]
const winner=iplteam.map((teams)=>{ return teams+10}
).map((teams)=>{
    return teams+1
})
.filter((teams)=>{return teams>=20
})

console.log(winner)

