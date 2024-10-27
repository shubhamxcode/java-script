class user{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`username is ${this.username}`);
    }
    static creatid(){//har object ke pass ye id nahi dega unique banjayegi
        return "113"
    }
}

const shubham=new user("shubham")

console.log(shubham.creatid());