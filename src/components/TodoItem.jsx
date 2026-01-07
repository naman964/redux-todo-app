import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../features/todos/todoSlice";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <div className="todo-item">
      {/* Todo Text */}
      <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
        {todo.text}
      </span>

      {/* Bottom Actions */}
      <div className="actions bottom-actions">
        <button
          className="status-btn"
          onClick={() => dispatch(toggleTodo(todo.id))}
        >
          {todo.completed ? "Undo" : "Complete"}
        </button>

        <button
          className="delete-btn"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
