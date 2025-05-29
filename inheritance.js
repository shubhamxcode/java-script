
class user{
    constructor(username,email,password){
        this.username=username
    }
   
}

class teacher extends user{//extends behave as prototype 
    constructor(username,email,password){//super keyword only called as once 
        super(username) 
        this.email=email
        this.password=password
    }
    addcourse(){
        console.log(`a new course is added by ${this.username}`);
    }
}

const shubham=new teacher("shubham","shubham@gmail.com",123)

shubham.addcourse()

// const masala=new user("chai")
// masala.addcourse()//noexcess
// // masala.teacher()//noexcess
// masala.logme()
// // shubham.logme()//excess hai
// console.log(shubham instanceof user);