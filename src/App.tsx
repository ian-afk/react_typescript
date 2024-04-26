import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoForm as todo } from "./models/todoForm";
import styles from "./App.module.css";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos: todo[] = JSON.parse(localStorage.getItem("todos") || "");
    return savedTodos.length > 0 ? savedTodos : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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

  function deleteTodo(id: number) {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  }

  function deleteAllTodo() {
    setTodos((prev) => prev.filter((item) => !item.completed));
  }
  return (
    <main className={styles.container}>
      <div className={styles["flex-container"]}>
        <div>
          <h1>Todo App</h1>
          <TodoForm onAddTodo={addTodo} todos={todos} />
          <TodoList
            todo={todos}
            onCompletedChange={setCompletedTodo}
            onDeleteTodo={deleteTodo}
          />
          <button onClick={() => deleteAllTodo()}>
            Delete All Completed Todo
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
