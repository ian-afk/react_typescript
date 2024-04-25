import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoForm as todo } from "./models/todoForm";

function App() {
  const [todos, setTodos] = useState<todo[] | []>([]);

  function addTodo(todo: string) {
    setTodos((prev) => [
      { id: Date.now(), todo, deleted: false, completed: false },
      ...prev,
    ]);
  }
  return (
    <>
      <h1>Todo app</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList />
    </>
  );
}

export default App;
