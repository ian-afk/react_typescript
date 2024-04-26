import { TodoForm } from "../models/todoForm";
import styles from "./TodoItem.module.css";

interface TodoItemProps {
  todo: TodoForm;
  onCompletedChange: (id: number, completed: boolean) => void;
  onDeleteTodo: (id: number) => void;
}

export default function TodoItem({
  todo,
  onCompletedChange,
  onDeleteTodo,
}: TodoItemProps) {
  return (
    <div className={styles.todoItems}>
      <label>
        <input
          type="checkbox"
          onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
        />
        <span
          style={{ textDecoration: `${todo.completed ? "line-through" : ""}` }}
        >
          {todo.todo}
        </span>
      </label>
      <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
    </div>
  );
}
