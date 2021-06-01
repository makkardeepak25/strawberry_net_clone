import { authReducer } from "./Auth/authReducer";
import { createStore, applyMiddleware, compose,combineReducers } from 'redux'






const customMiddleware = (store) => (next) => (action) => {
    return typeof action == "function" ? action(store.dispatch, store.getState) : next(action)
}


const rootReducer = combineReducers({
 
    auth: authReducer,
   

  });
export const store = createStore(rootReducer,

    compose(applyMiddleware(customMiddleware), reactReduxFirebase(firebase),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));