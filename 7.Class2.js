var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(id, name, email, age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.age = age;
    }
    Student.prototype.register = function () {
        console.log(this.name + " is now registered");
    };
    return Student;
}());
var userObj1 = new Student(1, 'Uma', 'uma@ef.com', 39);
console.log(userObj1);
userObj1.register();
console.log(userObj1.email);
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, id, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.callRegister = function () {
        _super.prototype.register.call(this);
        this.age = 65;
    };
    return Member;
}(Student));
var memberObj = new Member(1, "uma", "Uma@ef.com", 39);
memberObj.callRegister();
console.log(memberObj);
