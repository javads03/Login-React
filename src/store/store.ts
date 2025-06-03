// import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
// import employeeReducer from './employee/employeeReducer';
// //import { composeWithDevTools } from "redux-devtools-extension";
// import logger from "redux-logger";


//const store = createStore(employeeReducer);

//const store = createStore(employeeReducer, undefined, applyMiddleware(logger));

// const rootReducer = combineReducers({
//   employee: employeeReducer,

//   //department: departmentReducer,
// });

//	const store = createStore(rootReducer);

//using react redux toolkit ->

// import { configureStore } from "@reduxjs/toolkit";

// import employeeReducer from "./employee/employeeReducer";

// //import departmentReducer from "./department/departmentReducer";
// import { useDispatch, useSelector } from "react-redux";

// const store = configureStore({
//   reducer: {
//     employee: employeeReducer,

//     //department: departmentReducer,
//   },
// });

// export default store;

// export type RootState = ReturnType<typeof store.getState>;

// export type AppDispatch = typeof store.dispatch;

// export type AppStore = typeof store;

// export const useAppDispatch = () => useDispatch<AppDispatch>();

// export const useAppSelector = useSelector<RootState, any>;


//after api integration


import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employee/employeeReducer";
import baseApi from "../api-service/api";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    employee: employeeReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),

});

setupListeners(store.dispatch);

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppStore = typeof store;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector = useSelector<RootState, any>;

