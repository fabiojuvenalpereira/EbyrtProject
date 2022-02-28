import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: 'tasksState',
  initialState: {
    selectedTask: null,
    user: null,
    status: null,
    editTask: null,
    refresh: false,
    theme: true,
    tasks: [],
  },
  reducers: {
    selectedTask: (state, action) => {
      state.selectedTask = action.payload
    },

    setUser: (state, action) => {
      state.user = action.payload
    },

    setStatus: (state, action) => {
      state.status = action.payload
    },

    setEditTask: (state, action) => {
      state.editTask = action.payload
    },

    setRefresh: (state, action) => {
      state.refresh = action.payload
    },

    setTheme: (state, action) => {
      state.theme = action.payload
    },

    setTasks: (state, action) => {
      state.tasks = action.payload
    }
  },
});

export const {
  selectedTask,
  setUser,
  setStatus,
  setEditTask,
  setRefresh,
  setTheme,
  setTasks,
} = tasksSlice.actions

export default tasksSlice.reducer