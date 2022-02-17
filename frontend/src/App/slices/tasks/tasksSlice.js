import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: 'tasksState',
  initialState: {
    selectedTask: null,
    user: null,
    status: null,
  },
  reducers: {
    selectedTask: (state, action) => {
      state.selectedTask = action.payload
    },

    setUser: (state, action) => {
      state.user = action.payload
    },

    setStatus: (state, action) => {
      console.log('aqui');
      state.status = action.payload
    }
  },
});

export const { selectedTask, setUser, setStatus} = tasksSlice.actions

export default tasksSlice.reducer