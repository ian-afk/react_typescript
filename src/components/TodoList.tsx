import { TodoForm } from "../models/todoForm";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todo: TodoForm[];
  onCompletedChange: (id: number, completed: boolean) => void;
}

export default function TodoList({ todo, onCompletedChange }: TodoListProps) {
  return (
    <div>
      {todo.map((item) => (
        <TodoItem
          todo={item}
          key={item.id}
          onCompletedChange={onCompletedChange}
        />
      ))}
    </div>
  );
}
