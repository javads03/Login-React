// import "./UncontrolledLogin.css";
// import { useRef, useEffect } from "react";
// import kvLogo from "../../assets/kv-logo.png";
// import kvLoginImg from "../../assets/kv-login.jpeg";
// import Button from "./Button";
// import LoginInput from "./LoginInput";

// const UncontrolledLogin = () => {
//   const usernameRef = useRef<HTMLInputElement | null>(null);
//   const clearButtonRef = useRef<HTMLButtonElement | null>(null);

//   useEffect(() => {
//     if (usernameRef?.current) usernameRef.current.focus();
//   }, []);

//   function clearUsername() {
//     if (usernameRef.current)
//     {
//         usernameRef.current.value = "";
//         if (clearButtonRef.current)
//             clearButtonRef.current.disabled = true;
//     }
//   }

//   function updateClearButton() {
//     if (clearButtonRef.current && usernameRef.current)
//         if (usernameRef.current.value != '')
//         {
//             clearButtonRef.current.disabled = false;
//             clearButtonRef.current.onclick = clearUsername
//         }
//         else
//         {
//             clearButtonRef.current.disabled = true;
//         }

//   }

//   const handleNativeSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const form = event.currentTarget;
//     console.log("form submitted : ",form);
//     const formdata = new FormData(form);
//     const username = formdata.get("username") ;
//     const password = formdata.get("password") ;
//     console.log(username);
//     console.log(password);
//   }

//   return (
//     <div className="content">
//       <div className="pattern-side">
//         <div className="pattern" />
//         <div className="circle-large">
//           <div className="circle-inner">
//             <img src={kvLoginImg} alt="KV Login" className="login-image" />
//           </div>
//         </div>
//       </div>
//       <div className="login-side">
//         <div className="login-content">
//           <img className="logo" src={kvLogo} alt="KV Logo" />
//           <form onSubmit={handleNativeSubmit}>
//             <LoginInput
//               id="login-username-input"
//               label="Username"
//               ref={usernameRef}
//               name="username"
//               endAdornment={
//                 <button ref={clearButtonRef} type="button" onClick={clearUsername} disabled = {true}>Clear</button>
//               }
//               onChange={updateClearButton}
//             />

//             <LoginInput id="login-password-input" name="password" label="Password" />

//             <Button type="submit" className="login-button">
//               Log in
//             </Button>

//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UncontrolledLogin;
