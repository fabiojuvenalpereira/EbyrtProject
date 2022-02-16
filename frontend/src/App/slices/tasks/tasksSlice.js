import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: 'tasksFeatures',
  initialState: {
    createTask: '',
    removeTask: null,
  },
  // reducers: {
  //   addTask: (state, action) => {

  //   },
  //   removeTask: (state, action) => {

  //   },
  // },
});

export const { addTask, removeTask } = tasksSlice.actions

export default tasksSlice.reducer