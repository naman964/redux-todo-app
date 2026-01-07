import { createSlice } from "@reduxjs/toolkit";

const loadTodos = () => {
  const data = localStorage.getItem("todos");
  return data ? JSON.parse(data) : [];
};


const saveTodos = (state) => {
  localStorage.setItem("todos", JSON.stringify(state));
};

const todoSlice = createSlice({
  name: "todos",
  initialState: loadTodos(),
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
      saveTodos(state);
    },

    toggleTodo: (state, action) => {
      const todo = state.find(t => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        saveTodos(state);
      }
    },

    deleteTodo: (state, action) => {
      const newState = state.filter(t => t.id !== action.payload);
      saveTodos(newState);
      return newState;
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
