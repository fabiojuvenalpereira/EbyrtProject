import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: 'tasksState',
  initialState: {
    selectedTask: null,
    user: null,
    status: null,
    refresh: false,
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
    }
  },
});

export const { selectedTask, setUser, setStatus, setRefresh } = tasksSlice.actions

export default tasksSlice.reducer