export default function TodoList() {
  return (
    <div>
      <TodoItem />
    </div>
  );
}

function TodoItem() {
  return (
    <>
      <label htmlFor="#">
        <input type="checkbox" />
        <span>Hello</span>
      </label>
      <button>Delete</button>
    </>
  );
}
