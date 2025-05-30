import { useEffect, useState } from "react";

const ShowPasswordHook = () => {
  const [showPassword, setShowPassword] = useState(() => {
    const stored = localStorage.getItem("setShowPassword");
    return stored === "true"; // default to false if not set
  });

  useEffect(() => {
    localStorage.setItem("setShowPassword", showPassword.toString());
  }, [showPassword]);

  return {
    value: showPassword,
    set: setShowPassword,
  };
};

export default ShowPasswordHook;
