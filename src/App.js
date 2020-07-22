import React, { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import Typography from "@material-ui/core/Typography";

const LOCAL_STORAGE_KEY = "react-todo-lists-todo"; // For local storage key
const App = () => {
  const [todos, setTodos] = useState([]); // For functional components to maintain states we use useState. First argument is data and
  // second argument is to modify that data.

  // For initital rendering we have to set the localStorage. Initializing with empty object.
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  // To store the values in the localStorage and updates them whenever render we use useEffect hooks
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <Typography style={{ padding: 16 }} variant="h1">
        To-do-List
      </Typography>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      />
    </div>
  );
};

export default App;
