let myString: string;
let myNumber: number;
let myBool: boolean;
let myVariabe: any;

let strArray: string[];
let numArray: number[];
let boolArray: boolean[];

myString="Hello"
myNumber=1
myBool= true
myVariabe = true

strArray=["Scott", "Adam", "Tuan"]

console.log(strArray)

numArray=[1,2,3,4,5]
console.log(numArray)


boolArray = [true, false, true]
console.log(boolArray)

/*
    ! Tuple in typescript
*/
let strNumTuple: [string, number];

strNumTuple= ["Hello", 5]
console.log(strNumTuple)

let empId: number =1;
let empName: string="Uma"

let employee: [number, string] = [ empId, empName]

console.log(employee)

let myVoid: void = undefined;
console.log(myVoid)

let myNull: null = null;
console.log(myNull)

let myUndefined: undefined = null;
console.log(myUndefined)
