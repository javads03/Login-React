import { useNavigate } from "react-router-dom";
import "./EmployeeLeft.css";

export default function EmployeeLeft() {
  const navigate = useNavigate();
  function logout() {
    //localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("token");
    navigate("/login");
  }
  return (
    <>
      <div id="aside">
        <a href="https://www.keyvalue.systems/">
          <img src="/src/assets/kv-logo.png" id="img" />
        </a>
        <br />
        <nav>
          <ol>
            <li>
              <div
                id="li"
                onClick={() => {
                  navigate("/employees")
                }}
              >
                <div id="nav_icon">
                  <img className="icon" src="/src/assets/icon.svg" />
                </div>
                <span>Employee List</span>
              </div>
            </li>
            <li>
              <div
                id="li"
                onClick={() => {
                  logout();
                }}
              >
                <div id="nav_icon">
                  <img className="icon" src="/src/assets/icon.svg" />
                </div>
                <span>Logout</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
}
