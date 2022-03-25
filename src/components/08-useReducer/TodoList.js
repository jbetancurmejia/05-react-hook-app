import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({todos,handleToggle,handleDelete}) => {

    console.log(todos)

  return (
    <>
      <ul className="list-group list-group-flush">
        {todos.map((todo, index) => (
          <TodoListItem  todo={todo} key={todo.id}   index={index} handleToggle={handleToggle} handleDelete={handleDelete} />
        ))}
      </ul>
    </>
  );
};
