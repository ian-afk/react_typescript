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

  function setCompletedTodo(id: number, completed: boolean) {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, completed } : item))
    );
  }
  return (
    <>
      <h1>Todo app</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todo={todos} onCompletedChange={setCompletedTodo} />
    </>
  );
}

export default App;
