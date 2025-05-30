import React, { useEffect, useRef } from "react";
import Button from "../../../components/button/Button";
import LoginInput from "../LoginInput";
import "./LoginRight.css";
import MouseHook from "../../../hooks/MouseHook";
import { useNavigate } from "react-router-dom";
import ShowPasswordHook from "../../../hooks/ShowPasswordHook";

export default function LoginRight() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [usernameError, setUsernameError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  const navigate = useNavigate();

  const userNameRef = useRef<HTMLInputElement>(null);

  //const passwordRef = useRef<HTMLInputElement>(null);

  function handleUsernameClick(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }

  function handlePasswordClick(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function toggleShowPassword() {
    localStorage.setItem("setShowPassword", "true");
  }

  function onLogin() {
    if (username == "user" && password == "password") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/employees", { state: { fromDashboard: true } });
    } else localStorage.setItem("isLoggedIn", "false");
  }

  useEffect(() => {
    if (userNameRef.current) {
      userNameRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (username.length > 15) {
      setUsernameError("Username cannot be more than 15 characters");
      //alert(error)  error variable will change only after rendering setError
    } else if (username.length < 4 && username != "")
      setUsernameError("Username cannot be less than 4 characters");
    else {
      setUsernameError("");
    }
  }, [username]); // add error also to trigger useEffect when error comes after rendering

  useEffect(() => {
    if (password.length > 15) {
      setPasswordError("Password cannot be more than 15 characters");
      //alert(error)  error variable will change only after rendering setError
    } else if (password.length < 4 && password != "")
      setPasswordError("Password cannot be less than 4 characters");
    else {
      setPasswordError("");
    }
  }, [password]);

  const coordinates = MouseHook();
  const showPassword = ShowPasswordHook();

  return (
    <>
      <div className="rightcontainer">
        <div className="rightcontainer-box">
          <div className="rightcontainer-box1">
            <img src="/src/assets/kv-logo.png" alt="Circle image" />
          </div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              onLogin();
            }}
          >
            <div className="rightcontainer-box2">
              <LoginInput
                id="username"
                type="text"
                label="Username"
                value={username}
                onChange={(e) => handleUsernameClick(e)}
                ref={userNameRef}
                endIcon={
                  <button
                    className="endIcon"
                    type="button"
                    disabled={username.length === 0}
                    onClick={() => {
                      setUsername("");
                      console.log("here");
                    }}
                  >
                    Clear
                  </button>
                }
              />
              {usernameError ? <p className="error">{usernameError}</p> : null}
            </div>
            <div className="rightcontainer-box2">
              <LoginInput
                id="password"
                type={showPassword.value ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => handlePasswordClick(e)}
              />
              {passwordError ? <p className="error">{passwordError}</p> : null}
            </div>

            <div className="check">
              <input
                type="checkbox"
                id="showPassword"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  showPassword.set(e.target.checked)
                }
                checked={showPassword.value}
              />
              <label id="showPasswordLabel">show password</label>
            </div>
            <Button />

            <p>
              X: {coordinates.x} , Y: {coordinates.y}
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
