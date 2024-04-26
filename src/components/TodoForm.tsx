import { useState } from "react";
import styles from "./TodoForm.module.css";
import { TodoForm as todo } from "../models/todoForm";

interface TodoFormProps {
  onAddTodo: (title: string) => void;
  todos: todo[];
}

function TodoForm({ onAddTodo, todos }: TodoFormProps) {
  const [todo, setTodo] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTodo(e.target.value);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const completedTodo = todos.filter((item) => item.completed !== true);

    // const completedTodo = todos.reduce((acc, curr) => {
    //   if (curr.completed !== true) return acc + curr;
    // }, 0);
    console.log(completedTodo.length);

    if (completedTodo.length >= 10)
      return alert("You hit the limit, please complete 10 todos first!");
    if (!todo) return;
    onAddTodo(todo);
    setTodo("");
  }

  return (
    <div className={styles.todoForm}>
      <form onSubmit={handleSubmit} className={styles["form-todo"]}>
        <input type="text" value={todo} onChange={handleChange} />
        <button>Add</button>
      </form>
    </div>
  );
}

export default TodoForm;
