import React from "react";
import EmployeeLeft from "./employeeLayout/EmployeeLeft";
import { Outlet, Navigate } from "react-router-dom";

export default function Layout() {
  function isLoggedIn() {
    //const token = localStorage.getItem("isLoggedIn");
    const token = localStorage.getItem("token");
    if (token) return token;
    else return false;
  }

  if (isLoggedIn()) {
    return (
      <>
        <EmployeeLeft />
        <Outlet />
      </>
    );
  } else {
    return (
      <Navigate to="/login" />
      //<Navigate to="/login" state={{credentials: []}} replace = {true} />
    );
  }
}
