// function getSum(num1, num2){
//     return num1 + num2;
// }

// console.log(getSum(1,4))

function getSum(num1: number, num2: number){
    return num1 + num2
}

let total1 = getSum(1,6)
//let total2 = getSum(5,"uma") invalid
console.log(total1)

// let mySum = function(num1, num2){
//     return num1 + num2
// }

// console.log(mySum(5,6))

let mySum = function(num1: number, num2: any){
    return num1 +  num2
}

console.log(mySum(1,2))
console.log(mySum(1, false))

let addNumbers = function(num1: any, num2: any): number {
        // if(typeof num1 =='string'){
        //     num1 = parseInt(num1)
        // }
        // if(typeof num2 == "string"){
        //     num2 = parseInt(num2)
        // }
        // return num1 + num2

        // if(typeof num1 =='string' && typeof num2 == "string"){
        //     return parseInt(num1) + parseInt(num2)
        // }
        return parseInt(num1) + parseInt(num2)
}

console.log(addNumbers("23", "45"))
console.log(addNumbers("uma", 3))

function getName(firstName: string, lastName?: string){
    if(lastName === undefined){
        return firstName
    }
    return firstName + ' ' + lastName
}

console.log(getName('John', 'Galt'))