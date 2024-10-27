function setusername(username){
    this.username=username
}

function creatuser(username,email,password){
    setusername.call(this,username)
    this.email=email
    this.password=password
}

const user=new creatuser("chai","chai@gmail.com",123)
console.log(user);