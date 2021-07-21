class Student {
    public id: number
    private name: string
    public email: string
    protected age: number

    constructor(id: number, name: string, email: string, age: number){
        this.id = id
        this.name = name
        this.email = email
        this.age = age
    }

    register(){
       console.log(`${this.name} is now registered`) 
    }
}

let userObj1 = new Student(1, 'Uma', 'uma@ef.com',39)
console.log(userObj1)
userObj1.register()

console.log(userObj1.email)

class Member extends Student {
    id: number
    constructor(id:number, name: string, email: string, age: number){
        super(id, name, email, age)
        this.id =id
    }

    callRegister(){
        super.register()
        this.age = 65
    }
}

let memberObj = new Member(1,"uma", "Uma@ef.com", 39)
memberObj.callRegister()
console.log(memberObj)
