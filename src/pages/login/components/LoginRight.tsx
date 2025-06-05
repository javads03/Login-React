import React, { useEffect, useRef } from "react";
import Button from "../../../components/button/Button";
import LoginInput from "../LoginInput";
import "./LoginRight.css";
import MouseHook from "../../../hooks/MouseHook";
import { useNavigate } from "react-router-dom";
import ShowPasswordHook from "../../../hooks/ShowPasswordHook";
import { useLoginMutation } from "../../../api-service/auth/login.api";

export default function LoginRight() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [usernameError, setUsernameError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [error, setError] = React.useState("");

  const navigate = useNavigate();

  const userNameRef = useRef<HTMLInputElement>(null);

  //const passwordRef = useRef<HTMLInputElement>(null);

  const [login, { isLoading }] = useLoginMutation();

  function handleUsernameClick(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }

  function handlePasswordClick(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  // function toggleShowPassword() {
  //   localStorage.setItem("setShowPassword", "true");
  // }

  
  const onLogin = async () => {
    // const response = await login({ email: username, password: password });
    // console.log(response);
    // if (response.data) {
    //   //localStorage.setItem("isLoggedIn", "true");
    //   localStorage.setItem("token", response.data.accessToken);
    //   navigate("/employees", { state: { fromDashboard: true } });
    // } //else localStorage.setItem("isLoggedIn", "false");

    login({ email: username, password: password })
      .unwrap()
      .then((response) => {
        localStorage.setItem("token", response.accessToken);
        navigate("/employees");
      })
      .catch((error) => {
        setError(error.data.message);
      });
  };

  console.log(isLoading);

  useEffect(() => {
    if (userNameRef.current) {
      userNameRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (username.length > 15) {
      setUsernameError("Username cannot be more than 15 characters");
      //alert(error)  error variable will change only after rendering setError
    } else if (username.length < 3 && username != "")
      setUsernameError("Username cannot be less than 3 characters");
    else {
      setUsernameError("");
    }
  }, [username]); // add error also to trigger useEffect when error comes after rendering

  useEffect(() => {
    if (password.length > 15) {
      setPasswordError("Password cannot be more than 15 characters");
      //alert(error)  error variable will change only after rendering setError
    } else if (password.length < 3 && password != "")
      setPasswordError("Password cannot be less than 3 characters");
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
                testId="pass"
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
            {error ? <p className="error">{error}</p> : null}
            <Button disabled={isLoading} />

            <p>
              X: {coordinates.x} , Y: {coordinates.y}
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
