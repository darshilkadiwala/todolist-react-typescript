import React, { useContext, useRef } from "react";
import { TodoContext } from "../../store/TodoContext";
import cssClasses from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todoTitleInputRef = useRef<HTMLInputElement>(null);
  const todosCtx = useContext(TodoContext);

  const onFormSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredTitle = todoTitleInputRef.current?.value;
    if (enteredTitle?.trim().length !== 0) {
      todosCtx.addTodo(enteredTitle!);
      todoTitleInputRef.current!.value = "";
    }
  };
  return (
    <form className={cssClasses.form} onSubmit={onFormSubmitHandler}>
      <label htmlFor="todo-title">Enter todo title</label>
      <input type="text" name="todo-title" ref={todoTitleInputRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
