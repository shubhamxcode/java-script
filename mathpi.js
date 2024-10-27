// const descripter=Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descripter);


const chai={
    name:'shubham',
    password:132,


    orderchai(){
        console.log("chai nahi bani");//code fatt gaya 
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,'name',{
    writable: false,
    enumerable: false,
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));


for (const [key,value] of Object.entries(chai)){
    if (typeof value!=="function") {
        console.log(`${key},${value}`);
    }
    
}