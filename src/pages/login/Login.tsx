import { Navigate } from "react-router-dom";
import Left from "./components/LoginLeft";
import Right from "./components/LoginRight";
import "./Login.css";

function Login() {
  function isLoggedIn() {
    //const token = localStorage.getItem("isLoggedIn");
    const token = localStorage.getItem("token");
    if (token) return token;
    else return false;
  }

  if (isLoggedIn()) {
    return (
      <Navigate to="/employees" state={{ credentials: [] }} replace={true} />
    );
  } else {
    return (
      <>
        <div className="main">
          <Left />
          <Right />
        </div>
      </>
    );
  }
}

export default Login;
