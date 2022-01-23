import React from "react";
//importing Components
import Todo from "./Todo";


const TodoList = ({todos, setTodos, filterTodos}) => {
    return (
      <div className="todo-container">
        <ul className="todo-list">
            {filterTodos.map(todo => (
                <Todo todos={todos} setTodos={setTodos} key={todo.id} text={todo.text} currentTodo={todo} />
            )
            )}
        </ul>
      </div>    
    );
}

export default TodoList;