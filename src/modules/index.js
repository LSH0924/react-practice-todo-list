import input from "./input";
import todos from "./todos";
import { combineReducers } from "redux";

// combineReucers를 이용해 리듀서들을 합친다.
const reducers = combineReducers({
  input,
  todos
});

export default reducers;
