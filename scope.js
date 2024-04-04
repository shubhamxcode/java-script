// {
//     //called scope
// }

// // var c=232
// let a=21//this is called global scope

// if (true){//from 4 line to 8 line called block scope 
//     let a=2
//     const b=3
//     var c=4
// }
// console.log(a)

// console.log(b)
// console.log(c)//bug in var 

// // ++++++++++++++++++++++++++++++scope level and mini hosting+++++++++++++++++++++++++++++++++++++++++++++++

function one(){
    username="shubham"

    function two(){
        website="youtube"
        console.log(username+website)
    }
    // console.log(website)// we can not excess out side the scope before call
    two()
    // console.log(website)
}
one()

if(true){
    const username="shubham"
    if (username==="shubham"){
        const website='youtube'
        console.log(username + website)
    }
    console.log(website)
}
console.log(username)

// +++++++++++++++++++++++++intresting(hosting)++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addone(5))
function addone(num){
    return num+1
}

// console.log(addtwo())//we cannot acces before declaration when we declare in variable
// const addtwo=function(num){
//     return num+1
// }