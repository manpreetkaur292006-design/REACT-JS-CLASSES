import React from "react";
import { useState } from 'react';

const ShowHidePass = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <h1>Show/Hide Password</h1>
      <input type={showPassword ? "text" : "password"} />
      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Hide" : "Show"}
      </button>
    </>
  );
};

export default ShowHidePass;
