import React, { useEffect, useState } from "react";
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Typography from "@material-ui/core/Typography";
import swal from 'sweetalert'

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {


  const [todos, setTodos] = useState([]);

  // POPULATE TODOS ON RENDER
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  // STORES TODO IN BROWSER LOCAL STORAGE IN CASE OF SITE REFRESH
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);


  function addTodo(todo){
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id){
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    ) 
  }

  function removeTodo(id, onClick) {
    onClick = 
    swal({
        title: "Are you sure?",
        text: "Once deleted you cannot recover this entry!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! 💨 It's gone!", {
            icon: "success",
          });
        } else {
          swal("Whee, that was close!");
        }
      });
    setTodos(todos.filter(todo => todo.id !== id ));
  }

  return (
    <div className="App">
    <Typography style={{color: "white",padding: 16}} variant="h1">
      👋 Let's get to work!
    </Typography> 
    <TodoForm addTodo={addTodo} />
    <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
