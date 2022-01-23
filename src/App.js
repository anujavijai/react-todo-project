import {useState, useEffect} from "react";
import './App.css';
//importing Components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setinputText]     = useState('');
  const[todos, setTodos]              = useState([]);
  const[status, setStatus]            = useState('all');
  const[filterTodos, setFilterTodos]  = useState([]);

  //useEffect for Local Storage, run once when app start
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    if(status === 'all') {
      setFilterTodos(todos);
    } else if(status === 'completed') {
        setFilterTodos(todos.filter(todo => todo.completed===true));
    } else if(status === 'uncompleted') {
        setFilterTodos(todos.filter(todo => todo.completed===false));
    }
  };

  //Local Storage functions [start]
  const saveLocalTodos = () => {
       localStorage.setItem("todos",JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null) {
      localStorage.setItem("todos",JSON.stringify([]));
    } else {
       let localTodo = JSON.parse(localStorage.getItem("todos"));
       setTodos(localTodo);
    }
  };
  //Local Storage functions [end]

  return (
    <div className="App">
     <header>
      <h1> Todo List</h1>
    </header>
    <Form inputText={inputText} setinputText={setinputText} todos={todos} setTodos={setTodos}  setStatus={setStatus} />
    <TodoList todos={todos} setTodos={setTodos} filterTodos={filterTodos} />
    </div>
  );
}

export default App;
