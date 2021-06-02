import { authReducer } from "./Auth/authReducer";
import { createStore, applyMiddleware, compose,combineReducers } from 'redux'
import thunk from "redux-thunk";


const rootReducer = combineReducers({
 
    auth: authReducer,
   

  });
export const store  = createStore(rootReducer, applyMiddleware(thunk));