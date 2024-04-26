import { TodoForm } from "../models/todoForm";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

interface TodoListProps {
  todo: TodoForm[];
  onCompletedChange: (id: number, completed: boolean) => void;
  onDeleteTodo: (id: number) => void;
}

export default function TodoList({
  todo,
  onCompletedChange,
  onDeleteTodo,
}: TodoListProps) {
  const todoSort = todo.sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id;
    } else {
      return a.completed ? 1 : -1;
    }
  });

  return (
    <div className={styles.todoList}>
      {todo.length > 0 ? (
        todoSort.map((item) => (
          <TodoItem
            onDeleteTodo={onDeleteTodo}
            todo={item}
            key={item.id}
            onCompletedChange={onCompletedChange}
          />
        ))
      ) : (
        <p style={{ fontSize: "2.5rem", margin: "0 auto" }}>
          No todo. Add new todo.
        </p>
      )}
    </div>
  );
}
