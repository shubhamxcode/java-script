// controlflow or logicflow


const condition=123
if(condition===129){// if the condition is true then code will exicude otherwise code will not go in function
    console.log("yes")
} else{
    console.log(`my name is shubham varshney`)
}
//<,>,>=,<=,!=,!==,==


const power=900
if(power>800){
    const systempower="fly"
    console.log(`power is defined  and then ${systempower}`)
}
 console.log(`power is defined  and then ${systempower}`)//it show error becouse block scope value is never use in global scope


// shorthand notation
// implicite scope 
const ballance=100000
if(ballance===100000)console.log("yes");
// const account=100000
// if(account===100000)console.log("ok"),//this code is not readable we dont use like this
// console.log(`yup`)


const names="shubham varshney aditya varshney flying beast"

if(names==="hoho"){
    console.log(`no its not`)
}else if(names==="lol"){
    console.log(`no it not ji`)
}else{
    console.log(`yehyehyeh okkkk`)
}

const username=true
const usersign=true

if(username && usersign && 2==2 &&9==8){//if one condition is false then code doest not execude(&& means and)
    console.log(`yes`)
}

const useremail=true
const usergoogle=false
if(useremail || usergoogle){//(|| pipe sign and it called or)
    console.log(`yes he is logged in`)
}