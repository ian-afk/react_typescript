import { useState } from "react";

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

    onAddTodo(todo);
    setTodo("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={todo} onChange={handleChange} />
        <button>Add</button>
      </form>
    </>
  );
}

export default TodoForm;
