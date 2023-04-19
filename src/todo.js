const todoFactory = (name) => {
    const todo = [];
    const addTodo = (todoName) => {
        todo.push(todoName);
    }
    const removeTodo = (todoName) => {
        todo.splice(todo.indexOf(todo.find(obj => obj == todoName)), 1);
    }
    return { name, todo, addTodo, removeTodo };
}

export default todoFactory;