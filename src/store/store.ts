import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import employeeReducer from './employee/employeeReducer';
//import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

//const store = createStore(employeeReducer);

const store = createStore(employeeReducer, undefined, applyMiddleware(logger));



export default store;
