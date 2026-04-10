import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "./inputTextSlice";
import taskReducer from "./tasksSlice";
import filterReducer from "./filterSlice";

const store = configureStore({
  reducer: {
    inputText: inputReducer,
    tasks: taskReducer,
    filter: filterReducer,
  },
});

export default store;
