import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // To generate unique id's we use this package.
import { Button, TextField } from "@material-ui/core";

export const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({ id: "", task: "", completed: false });

  const handleTaskInputChange = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // To prevent the default submit ability.
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });
      setTodo({ ...todo, task: "" }); // After adding again we need to make the field empty.
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="task"
        type="text"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <Button variant="contained" type="submit" color="primary">
        submit
      </Button>
    </form>
  );
};
export default TodoForm;
