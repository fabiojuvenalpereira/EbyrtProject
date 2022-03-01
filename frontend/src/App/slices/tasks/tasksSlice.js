import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: 'tasksState',
  initialState: {
    selectedTask: null,
    user: null,
    status: null,
    editTask: null,
    refresh: false,
    theme: false,
    themeMode: 'light-theme',
    tasks: [],
    menu: 'closed',
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

    setThemeMode: (state, action) => {
      state.themeMode = action.payload
    },

    setTasks: (state, action) => {
      state.tasks = action.payload
    },
    setMenu: (state, action) => {
      state.menu = action.payload
    },
  },
});

export const {
  selectedTask,
  setUser,
  setStatus,
  setEditTask,
  setRefresh,
  setTheme,
  setThemeMode,
  setTasks,
  setMenu,
} = tasksSlice.actions

export default tasksSlice.reducer