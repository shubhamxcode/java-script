// ⠛⠛⣿⣿⣿⣿⣿⡷⢶⣦⣶⣶⣤⣤⣤⣀   
//    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀ 
//    ⠉⠉⠉⠙⠻⣿⣿⠿⠿⠛⠛⠛⠻⣿⣿⣇ 
//   ⢤⣀⣀⣀  ⢸⣷⡄ ⣁⣀⣤⣴⣿⣿⣿⣆
//     ⠹⠏   ⣿⣧ ⠹⣿⣿⣿⣿⣿⡿⣿
//          ⠛⠿⠇⢀⣼⣿⣿⠛⢯⡿⡟
//           ⠦⠴⢿⢿⣿⡿⠷ ⣿ 
//        ⠙⣷⣶⣶⣤⣤⣤⣤⣤⣶⣦⠃ 
//        ⢐⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿  
//        ⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇  
//          ⠙⠻⢿⣿⣿⣿⣿⠟ᅠᅠᅠ
//(REDUCE)
// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4                                                   
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// // Expected output: 10


const mynum=[1,2,3]
// const mytotal=mynum.reduce( function(acc,curreval){
//  console.log(`acc:${acc} and curr:${curreval}`)
//  return acc+curreval
// },0);

const mytotal=mynum.reduce((acc,curr)=>acc+curr,0)

console.log(mytotal);//code doest not exicude problem

const courses=[
    {
        price:1999,
        name:'python'
    },
    {
        price:2000,
        name:'java script'
    },
    {
        price:3000,
        name:'java'
    },

]
const shubham=courses.reduce((acc,item)=>acc+item.price,0)
console.log(shubham)