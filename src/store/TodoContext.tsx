import React, { ReactNode, useEffect, useState } from "react";
import Todo from "../modals/todo";

type TodoContextType = {
  todos: Todo[];
  addTodo: (todoTitle: string) => void;
  removeTodo: (todoId: string) => void;
};

export const TodoContext = React.createContext<TodoContextType>({
  todos: [],
  addTodo: (todoTitle: string) => {},
  removeTodo: (todoId: string) => {},
});

const TodoContextProvider: React.FC<{ children?: ReactNode | undefined }> = (
  props
) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const myTodosList: Todo[] = [
      new Todo("Learn React"),
      new Todo("Typescript"),
      new Todo("Cloud"),
      new Todo("Ionic"),
    ];
    setTodos((prevTodos) => prevTodos.concat(myTodosList));
  }, []);

  const onAddTodoHandler = (title: string) => {
    const newTodo = new Todo(title);
    setTodos((prevTodos) => prevTodos.concat(newTodo));
  };

  const onRemoveTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };
  const contextValue: TodoContextType = {
    todos,
    addTodo: onAddTodoHandler,
    removeTodo: onRemoveTodoHandler,
  };
  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
