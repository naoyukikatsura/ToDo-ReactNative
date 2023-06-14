import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './features/task/TaskSlice';
import menuReducer from './features/menu/MenuSlice';

export const store = configureStore({
  reducer: {
    task: taskReducer,
    menu: menuReducer
  }
})

export type RootState = ReturnType<typeof store.getState>