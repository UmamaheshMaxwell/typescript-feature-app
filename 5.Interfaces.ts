// function ShowTodo(todo: {title: string, text: string}){
//     console.log(todo.title + ':' + todo.text)
// }

interface Todo {
    title: string,
    text: string,
    callMe: ()=> any
}

function ShowTodo(todo: Todo){
    console.log(todo.title + ':' + todo.text)

}

let myTodo = {title: 'Angular', 
              text: 'Javascript Framework', 
              callMe: ()=>{
                 return {}
               }
}
ShowTodo(myTodo)

class BaseTodo implements Todo {
    
}