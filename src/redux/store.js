import { combineReducers, legacy_createStore as createStore } from "redux";
import inputTextReducer from "./reducers/inputTextReducer";
import tasksReducer from "./reducers/tasksReducer";
import filterReducer from "./reducers/filterReducer";

const rootReducer = combineReducers({
  inputText: inputTextReducer,
  tasks: tasksReducer,
  filter: filterReducer,
});
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
