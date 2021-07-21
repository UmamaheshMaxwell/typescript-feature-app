var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("User Created :" + this.name);
    }
    return User;
}());
var user1 = new User("Uma", "uma@ef.com", 39);
console.log(user1);
var user2 = new User("Scott", "scott@ef.com", 39);
console.log(user2);
