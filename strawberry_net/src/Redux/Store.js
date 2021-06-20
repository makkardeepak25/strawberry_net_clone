import { authReducer } from "./Auth/authReducer";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { prodReducer } from "./Products/productReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  prod: prodReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
