import React from "react";


const Todo = ({text, id, todos, setTodos, currentTodo}) => {
    const deleteHandler = () => {
        setTodos(todos.filter(el =>
            el.id !== currentTodo.id
        ));
    }
    const completeHandler = () => {
        setTodos(todos.map((el, index) => {
           if( el.id === currentTodo.id) {
               return {
                   ...el, completed : !el.completed
               }
           }
           return el;
        }
        ));
    }
    return (
        <div className="todo">
            <li className={`todo-item ${currentTodo.completed ? "completed" : ""}`}>
                {text}
            </li>
            <button className="complete-btn " onClick={completeHandler}>
                <i className="fas fa-check"></i>
                </button>
            <button className="trash-btn" onClick={deleteHandler}>
            <i  className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;