import { TodoForm } from "../models/todoForm";

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
    <>
      <label htmlFor="#">
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
    </>
  );
}
