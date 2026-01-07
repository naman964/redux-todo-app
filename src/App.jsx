import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="app-container">
      <h2 className="title">
        Redux Todo App
        <img src="/todo.png" alt="Todo icon" className="todo-icon" />
      </h2>

      <TodoInput />
      <TodoList />
    </div>
  );
}
