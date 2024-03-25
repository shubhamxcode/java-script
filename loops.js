for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

for (let index = 0; index < 10; index++) {
    const element = index;
    if (element==5) {
        console.log("5 is best number")
        
    }
    console.log(element)
}
for (let index = 0; index <=10; index++) {
    // console.log(`this is outerloop ${index}`)
    for (let j = 0; j <=9; j++) {
        console.log(index + `*` + j+`=` + index*j);
        // console.log(`this is inner loop`)
    }
}


const myarray=['shubham','varshney','Aditya','varshney']

for (let index = 0; index <myarray.length; index++) {//it show undefined couse it out of array
    const element = myarray[index];
    console.log(element)
    
}


// break and continue
for (let index = 1; index <20; index++) {
    if(index==5){
        console.log(`detected`)
        continue
    }
    if(index==8){
        break
    }
    console.log(index)
    
}