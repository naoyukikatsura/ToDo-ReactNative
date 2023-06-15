import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export interface Task {
  title: string;
  description: string;
  id: number;
  done: boolean;
}

export const taskItems: Task[] = [
    {
    title: "タイトル3",
    description: "説明3",
    id: 3,
    done: false,
  },
  {
    title: "タイトル2",
    description: "説明2",
    id: 2,
    done: false,
  },
  {
    title: "タイトル1",
    description: "説明1",
    id: 1,
    done: false,
  },
] as Task[]

const taskSlice = createSlice({
  name: 'task',
  initialState: {taskItems},
  reducers: {
    // 新規ボタンタップで新規タスクを追加する
    createTaskItem: (state, action: PayloadAction<number>) => {
      const newId = action.payload + 1;
      const newTaskItem: Task = {
        title: "",
        description: "",
        id: newId,
        done: false,
      };
      state.taskItems.unshift(newTaskItem);
    },

    toggleItem: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      state.taskItems = state.taskItems.map((item) => item.id === itemId ? { ...item, done: !item.done} : item)

    },
  }
})

export const { createTaskItem, toggleItem } = taskSlice.actions
export default taskSlice.reducer;