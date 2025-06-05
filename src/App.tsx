//import { useState } from 'react'

import "./App.css";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import NotFound from "./pages/NotFound";

import Layout from "./pages/Layout";
import EmployeeCreate from "./pages/employeeCreate/EmployeeCreate";
import Login from "./pages/login/Login";
import EmployeeList from "./pages/employeeList/EmployeeList";

import EmployeeDetailById from "./pages/employeeDetails/EmployeeDetailById";
import EmployeeEdit from "./pages/employeeEdit/EmployeeEdit";
import { Provider } from "react-redux";
import store from "./store/store";
import EmployeeProfile from "./pages/employeeProfile/EmployeeProfile";

//import UncontrolledLogin from './pages/UncontrolledLogin/UncontrolledLogin'

//import Header from './components/header'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    //element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
    //element: <Login />,
  },
  {
    path: "/employees",
    element: <Layout />,
    children: [
      { index: true, element: <EmployeeList /> },
      { path: "create", element: <EmployeeCreate /> },
      //{ path: ":id", element: <SearchParams /> },
      { path: ":id", element: <EmployeeDetailById /> },
      // { path: "list", element: <EmployeeList /> },
      { path: ":id/edit", element: <EmployeeEdit /> },
      
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </>
  );
}

export default App;
