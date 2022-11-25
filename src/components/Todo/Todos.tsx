import React, { useContext } from "react";
import { TodoContext } from "../../store/TodoContext";
import TodoItem from "./TodoItem";
import cssClasses from "./Todos.module.css";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodoContext);
  return (
    <>
      <ul className={cssClasses.todos}>
        {todosCtx.todos?.map((item, index) => (
          <TodoItem
            key={`todo-item-${index}-${item.id}`}
            todo={item}
            onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
          />
        ))}
      </ul>
    </>
  );
};

export default Todos;
