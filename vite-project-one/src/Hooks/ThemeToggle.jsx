import React from "react";
import { useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);
  return (
    <>
      <div
        style={{
          backgroundColor: dark ? "#121212" : "#ffffff",
          color: dark ? "#ffffff" : "#000000",
          minHeight: "25vh",
          padding: "2rem",
          transition: "all 0.3s ease",
        }}
      >
        <h1>{dark ? "Dark Mode" : "Light Mode"}</h1>
        <button onClick={() => setDark(!dark)}>Toggle Theme</button>
      </div>
    </>
  );
};

export default ThemeToggle;
