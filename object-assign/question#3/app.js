function User(firstName,lastName,gender,email,password){
    this.name=firstName+" "+lastName;
    this.gender=gender;
    this.email=email;
    this.password=password;
}

var user1 = new User("Hassan","Raza","m","123@gmail.com","12345"); 
var user2 = new User("Ali","Raza","m","123@gmail.com","12345"); 
var user3 = new User("Hamid","Ali","m","123@gmail.com","12345"); 
console.log(user1,user2,user3)