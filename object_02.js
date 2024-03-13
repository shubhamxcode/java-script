// // const tinderuser=new Object()//this is singleton object
// const tinderuser={}//this is non singleton object
// tinderuser.id='shubham123'
// tinderuser.name='shubham'
// // console.log(tinderuser)


// const regular={
//     name:'shubham',
//     obejct_1:{
//         obejct_2:{
//             anothername:'varshney'
//         }
//     }
// }
// console.log(regular.obejct_1.obejct_2.anothername)


// const obj1={1:'a',2:'b'}
// const obj2={3:'a',4:'b'}
// const obj3=Object.assign({},obj1,obj2)//where{} are target operator and obj1,obj2 are source operator
// const obj4={...obj1,...obj2}//right method
// console.log(obj3)
// console.log(obj4)
// // console.log(returndTarget===target)


// // const user=[
// //     {
// //         id:12,
// //         email:'sh@gmail.com'
// //     },
// //     {
// //         name:'shubham',
// //         sername:'varshney'
// //     },
// // ]

// //  console.log (user[1].id)// confusion hai isme 

// console.log(tinderuser)
// console.log(Object.keys(tinderuser))//datatype array very imp 
// console.log(Object.values(tinderuser))//datatype array very imp 
// console.log(Object.entries(tinderuser))//array ke under array 
// console.log(tinderuser.hasOwnProperty('id'))//does our value exit or not give output in boolean 


///++++++++++++++++++++++++++++++++++++API+++++++++++++++++++++destructured method of object++++++++++++++++++++++++++++++ 

// const course={
//     name:'shubham',
//     id:234434223,
//     password:25097
// }
// // console.log(course.name)// we can accese by this method but this is not the right method 
// const { name} = course;
// console.log(name);
const course={
    names:'shubham,varshney',
    ids:234434223,
    password:25097
}
// console.log(course.name)// we can accese by this method but this is not the right method 
const { names:named} = course;
console.log(named);


// ++JSON++
// {
//     "name":"shubham",
//     "id":272837,
//     "price":"free"
// }
// ++in Array++
[
    {},
    {},
    {}
]