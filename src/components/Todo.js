import React from "react";
import { ListItem, Checkbox, Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const Todo = ({ todo, toggleComplete, removeTodo }) => {
  const handleCheckboxClick = () => {
    toggleComplete(todo.id);
  };

  const handleRemoveClick = () => {
    removeTodo(todo.id);
  };
  return (
    <ListItem style={{ display: "flex" }}>
      <Checkbox
        checked={todo.completed}
        type="checkbox"
        onClick={handleCheckboxClick}
      />
      <li
        style={{
          textDecoration: todo.completed ? "line-through" : null,
        }}
      >
        {todo.task}
      </li>
      <Button onClick={handleRemoveClick}>
        <DeleteIcon />
      </Button>
    </ListItem>
  );
};

export default Todo;
