import { useState } from "react";

function TodoForm() {
  const [todo, setTodo] = useState();

  function handleChange(e: HTMLInputElement) {
    const { name, value } = e.target;
  }

  return (
    <>
      <form action="#">
        <input type="text" value={todo} onChange={handleChange} />
        <input type="submit" />
      </form>
    </>
  );
}

export default TodoForm;
