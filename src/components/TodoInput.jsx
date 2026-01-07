import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";

export default function TodoInput() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const submitHandler = () => {
    if (!text.trim()) return;
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <div className="todo-input">
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add todo..."
      />
      <button className="add-btn" onClick={submitHandler}>
        Add
      </button>
    </div>
  );
}
