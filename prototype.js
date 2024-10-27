const myhero=['superman','batman','thor']

let herospower={
    thor:'hammer',
    spiderman:'sling',
    getspider:function(){
        console.log(`spidermaan power is ${this.spiderman}`);
    }
}
// herospower.getspider()
// let world="hello"
Object.prototype.shubham=function(){
    console.log(`spiderman my boy${this.thor}`);
}
// shubham()
herospower.shubham()
Array.prototype.varshney=function(){
    console.log('my array');
}
myhero.varshney()
herospower.varshney()//array pe power nahi hai ki bo object ko excess kar paye 


const teacher=function(){
    makevideo:true
}
const tasupport=function(){
    makeassinment:true
    // __proto__:teacher
}

teacher.__proto__=tasupport

//modern syntak

Object.setPrototypeOf(teacher,tasupport)




let username='chaiorcode                ';

String.prototype.truelength=function(){
    console.log(this.trim().length);
    console.log('shubham varshney');
}
username.truelength()
