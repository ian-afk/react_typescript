import { TodoForm } from "../models/todoForm";
import TodoItem from "./TodoItem";

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
  return (
    <div>
      {todo.map((item) => (
        <TodoItem
          onDeleteTodo={onDeleteTodo}
          todo={item}
          key={item.id}
          onCompletedChange={onCompletedChange}
        />
      ))}
    </div>
  );
}
