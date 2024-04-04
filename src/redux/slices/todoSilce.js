import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todoData: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoData.push({ id: state.todoData.length + 1, ...action.payload });
    },
    deleteTodo: (state, action) => {
      state.todoData = state.todoData.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
