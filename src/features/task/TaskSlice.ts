import { createSlice } from "@reduxjs/toolkit";

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
  reducers: {}
})

export default taskSlice.reducer;