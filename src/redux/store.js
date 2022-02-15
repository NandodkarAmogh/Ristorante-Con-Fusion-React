import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import logger from "redux-logger";
import dishReducer, { dishInitialState } from "./dishes/dishReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

// const rootReducer = combineReducers(dishReducer, Comments )
// console.log(rootReducer)
const store = createStore(dishReducer, composeWithDevTools(
    applyMiddleware(logger),
))

export default store 