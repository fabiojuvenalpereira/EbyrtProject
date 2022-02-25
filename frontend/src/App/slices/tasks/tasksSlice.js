import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: 'tasksState',
  initialState: {
    selectedTask: null,
    user: null,
    status: null,
    refresh: false,
    theme: true,
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

    setRefresh: (state, action) => {
      state.refresh = action.payload
    },

    setTheme: (state, action) => {
      state.theme = action.payload
    }
  },
});

export const { selectedTask, setUser, setStatus, setRefresh, setTheme } = tasksSlice.actions

export default tasksSlice.reducer