// object literals

const user1={
    username:'shubham',
    id:23232,
    getuserdata:function(s){
        // console.log(`username:${this.username}`);
        console.log(this);
    }
}
user1.getuserdata()
console.log(this);//in node environment if we want this in global object the value is empty but in window the output is more 

// constructor function

// function user(username,isloogedin,logincount){
//     this.username=username
//     this.isloogedin=isloogedin
//     this.logincount=logincount
//     return this//by defualt
// }
// const userone= new user("shubham","yes",12)//new give new instance
// const usertwo= new user("shubham","no",11)//new give new instance
// console.log(userone);

// constructor function call due to new keyword
//constructor function use to make multiple instance
// 1st---{}empty object form called instance
// 2nd---constructor function call due to new keyword 
// 3rd---all arguiment store in obejct
// 4th --- finally we got 
