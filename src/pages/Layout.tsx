import React from "react";
import EmployeeLeft from "./employeeLayout/EmployeeLeft";
import { Outlet, Navigate } from "react-router-dom";

export default function Layout() {
  function isLoggedIn() {
    const token = localStorage.getItem("isLoggedIn");
    return token === "true";
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
