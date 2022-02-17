import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: 'tasksState',
  initialState: {
    user: null,
    selectedTask: null,
  },
  reducers: {
    selectedTask: (state, action) => {
      state.value = action.payload
    },
    setUser: (state, action) => {
      state.value = action.payload
    },
  },
});

export const { selectedTask, setUser } = tasksSlice.actions

export default tasksSlice.reducer