//ES6

class user{
    constructor(username,password,email){
        this.username=username
        this.password=password
        this.email=email
    }
    encryptpassword(){
        return `${this.username}`
    }
}

const chai=new user("shubham","123","shubham@gmail.com")
console.log(chai.encryptpassword());