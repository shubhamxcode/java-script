const useremail="shubh.varshneycode@"
if(useremail){
    console.log("yes he is logged in")
}else{
    console.log("no he is not log in")
}
// falshy value  
// false,0,-0,BigInt 0n,"",null,undefined,NaN
// truthy value
// "0","etc...","flase"," "(space),{},[],function(){0}

if (useremail.length===0) {
    console.log("array is empty")//this is the method to check the empty array
}
const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("object is empty")
}
// false==0 //it show true in inspect
// false=="" //it show true in inspect
// 0==""//it show true in inspect

// Nullish coalescing operator(??)
let val1;
val1=2??10
val1=null??10
val1=undefined??10
val1=undefined??10??80

console.log(val1)

//terniary operator
const icecubesize=100
icecubesize<=80?console.log("less than 80"):console.log("more than 80")