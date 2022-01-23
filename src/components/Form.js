import React from "react";


function form ({inputText, setinputText, todos , setTodos, setStatus}) {
    const setinputTextHandler = (e) => {
        setinputText(e.target.value);
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([ ...todos, {text : inputText, completed: false, id: Math.random()+1000}]);
        setinputText('');
    }
    const filterTodoHandler = (e) => {
       setStatus(e.target.value);

    }
    return (
        <form>
            <input type="text" value={inputText} className="todo-input" onChange={setinputTextHandler} />
            <button className="todo-button" type="submit" onClick={submitTodoHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select" onChange={filterTodoHandler} >
                <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default form;