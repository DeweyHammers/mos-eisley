import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import combineReducers from "./reducers/combineReducers";

const store = createStore(
  combineReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
