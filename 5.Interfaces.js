// function ShowTodo(todo: {title: string, text: string}){
//     console.log(todo.title + ':' + todo.text)
// }
function ShowTodo(todo) {
    console.log(todo.title + ':' + todo.text);
}
var myTodo = { title: 'Angular',
    text: 'Javascript Framework',
    callMe: function () {
        return {};
    }
};
ShowTodo(myTodo);
