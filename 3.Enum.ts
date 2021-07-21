// enum Direction {
//     Up ,
//     Down ,
//     Left,
//     Right
// }

enum Direction {
    Up =10,
    Down =20,
    Left =30,
    Right =40
}

console.log(Direction)

enum Week {
    Sunday=1,
    Monday=2,
    Tuesday=3,
    Wednesday=4,
    Thursday=5,
    Friday=6,
    Saturday=7
}

console.log(Week.Wednesday)


enum UserResponse {
    No =0,
    Yes =1
}

console.log(UserResponse.Yes)

function APIReponse(message?: string, response?: UserResponse): any{
    if(message){
        return UserResponse.Yes
    } else {
        return UserResponse.No
    }
}   

console.log(APIReponse())

/*
    ? String ENUMS
*/

enum UserDirection {
    UP ="UP",
    DOWN="DOWN",
    LEFT="LEFT",
    RIGHT="RIGHT"
}

console.log(UserDirection)

/*
    ? Hetrogenous ENUMS
*/

enum Weekend {
    FRIDAY="FRIDAY",
    SATURDAY=1,
    SUNDAY=2
}

console.log(Weekend.FRIDAY)
console.log(Weekend.SATURDAY)