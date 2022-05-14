import {
  RiCheckboxLine,
  RiArrowDownFill,
  RiDeleteBack2Line,
  RiEdit2Line,
} from "react-icons/ri";
import { useState } from "react";
import completeTodo from "../services/completeTodo";
import removeTodo from "../services/removeTodo";

export default function Todo({ todo, setEdit }) {
  const [showDesc, setShowDesc] = useState(false);

  return (
    <div className={todo.is_done ? "todo-row complete" : "todo-row"}>
      <div className="header">
        <div onClick={() => completeTodo(todo)} className="todo">
          {todo.title}
        </div>
        <div className="icons">
          <RiArrowDownFill
            onClick={() => setShowDesc((prev) => !prev)}
            className="delete-icon todo-handler"
          />
          <RiEdit2Line
            onClick={() => {
              setEdit({
                id: todo.id,
                value: todo.title,
                description: todo.description,
                is_done: todo.is_done,
              });
            }}
            className="edit-icon todo-handler"
          />
          <RiDeleteBack2Line
            onClick={() => removeTodo(todo.id)}
            className="delete-icon todo-handler"
          />
          <RiCheckboxLine
            onClick={() => completeTodo(todo)}
            className="delete-icon todo-handler"
          />
        </div>
      </div>
      {showDesc && (
        <div onClick={() => completeTodo(todo.id)} className="description">
          Description: {todo.description}
        </div>
      )}
    </div>
  );
}
