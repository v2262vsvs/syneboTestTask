import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TodoState {
  id: number;
  name: string;
  checked: boolean;
}

const initialState: TodoState[] = [
  {
    id: 1,
    name: "Do my HW",
    checked: false,
  },
  {
    id: 2,
    name: "order starlink for 350$",
    checked: true,
  },
  {
    id: 3,
    name: "Call to Marty",
    checked: false,
  },
  {
    id: 4,
    name: "Complete Todo App on Frontend",
    checked: false,
  },
  {
    id: 5,
    name: "Yoga after breakfast",
    checked: false,
  },
  {
    id: 6,
    name: "Text to your dude",
    checked: false,
  },
];
type Action = {
  task: string;
  checked: boolean;
};
export const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Action>) => {
      const nextId = state[state.length - 1].id + 1;
      const newTodos: TodoState = {
        id: nextId,
        name: action.payload.task,
        checked: action.payload.checked,
      };
      state.push(newTodos);
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      return state.filter((item: TodoState) => item.id !== action.payload);
    },
    checkTask: (state, action: PayloadAction<number>) => {
      state.map((item: TodoState) => {
        if (item.id == action.payload) {
          item.checked = !item.checked;
        }
      });
    },
    setClearCompleted: (state, action: PayloadAction<boolean>) => {
      return state.filter((item: TodoState) => item.checked !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, deleteTask, checkTask, setClearCompleted } =
  todoSlice.actions;

export default todoSlice.reducer;
