import { FC } from "react";
import Todo from "../../modals/todo";
import cssClasses from "./TodoItem.module.css";

const TodoItem: FC<{ todo: Todo; onRemoveTodo: () => void }> = (props) => {
  return (
    <li className={cssClasses.item} key={props.todo.id}>
      <p>{props.todo.title}</p>
      <i className="fa-solid fa-trash" onClick={props.onRemoveTodo}></i>
    </li>
  );
};

export default TodoItem;
