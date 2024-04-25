import { TodoForm } from "../models/todoForm";

interface TodoItemProps {
  todo: TodoForm;
}

export default function TodoItem({ todo }: TodoItemProps) {
  return (
    <>
      <label htmlFor="#">
        <input type="checkbox" />
        <span>{todo.todo}</span>
      </label>
      <button>Delete</button>
    </>
  );
}
