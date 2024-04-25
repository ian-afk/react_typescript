import { useState } from "react";

function TodoForm() {
  const [todo, setTodo] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTodo(e.target.value);
  }

  return (
    <>
      <form action="#">
        <input type="text" value={todo} onChange={handleChange} />
        <button>Add</button>
      </form>
    </>
  );
}

export default TodoForm;
