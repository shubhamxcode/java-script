// function multiplierby5(num){
//     return num*5
// }
// console.log(multiplierby5(10));
// console.log(multiplierby5.power=2);//we can function as a object couse evrything in j.s is object object is grand parent after that there is no grand parent of j.s
// console.log(multiplierby5.prototype);//empty

function createuser(username,score){
    this.username=username
    this.score=score
}

createuser.prototype.increament=function(){
    this.score++
}
createuser.prototype.printme=function(){
    console.log(`price of chai is ${this.score}`);
}

const chai=new createuser("shubham",12)
const bye=new createuser("varshney",25)

chai.printme()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/ 