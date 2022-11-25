import NewTodo from "./components/Todo/NewTodo";
import Todos from "./components/Todo/Todos";
import TodoContextProvider from "./store/TodoContext";

function App() {
  return (
    <TodoContextProvider>
      <NewTodo />
      <Todos />
    </TodoContextProvider>
  );
}

export default App;
