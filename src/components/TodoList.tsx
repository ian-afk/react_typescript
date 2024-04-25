import { TodoForm } from "../models/todoForm";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todo: TodoForm[];
}

export default function TodoList({ todo }: TodoListProps) {
  return (
    <div>
      {todo.map((item) => (
        <TodoItem todo={item} />
      ))}
    </div>
  );
}
