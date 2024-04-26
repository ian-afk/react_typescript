import { useState } from "react";
import styles from "./TodoForm.module.css";

interface TodoFormProps {
  onAddTodo: (title: string) => void;
}

function TodoForm({ onAddTodo }: TodoFormProps) {
  const [todo, setTodo] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTodo(e.target.value);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!todo) return;
    onAddTodo(todo);
    setTodo("");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={styles["form-todo"]}>
        <input type="text" value={todo} onChange={handleChange} />
        <button>Add</button>
      </form>
    </>
  );
}

export default TodoForm;
