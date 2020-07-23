import React from "react";
import Todo from "./Todo";
import { List } from "@material-ui/core";

export const TodoList = ({ todos, toggleComplete, removeTodo, modify }) => {
  return (
    <List>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
          modify={modify}
        />
      ))}
    </List>
  );
};
export default TodoList;
