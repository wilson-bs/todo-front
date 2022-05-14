import React, { useState, useRef } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { RiCheckboxCircleLine, RiArrowDownCircleLine } from "react-icons/ri";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const [showDescription, setShowDescription] = useState(false);
  const [is_done, setIsDone] = useState(props.edit ? props.edit.is_done : 0);
  const [description, setDescription] = useState(
    props.edit ? props.edit.description : ""
  );

  const inputRef = useRef(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDescription = (e) => {
    e.preventDefault();
    setShowDescription(!showDescription);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      title: input,
      description,
      isDone: is_done,
      showDescription: false,
    });

    setInput("");
    setDescription("");
    setShowDescription(false);
    setIsDone(0);
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <div className="todo-form update">
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="title"
            ref={inputRef}
            className="todo-input edit todo-description"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={handleDescriptionChange}
            name="description"
            className="todo-input todo-description"
          />

          <button onClick={handleSubmit} className="todo-button update">
            <RiCheckboxCircleLine />
          </button>
        </div>
      ) : (
        <>
          <input
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            name="title"
            className="todo-input"
            ref={inputRef}
          />
          <button onClick={handleDescription} className="todo-button edit">
            <RiArrowDownCircleLine />
          </button>
          <button onClick={handleSubmit} className="todo-button">
            <BsPlusCircleFill />
          </button>
          {showDescription && (
            <textarea
              placeholder="Description"
              value={description}
              onChange={handleDescriptionChange}
              name="description"
              className="todo-input todo-description"
            />
          )}
        </>
      )}
    </form>
  );
}

export default TodoForm;
