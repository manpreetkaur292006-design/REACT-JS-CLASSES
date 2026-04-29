import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="nav-bar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/bollywood">Bollywood</Link>
        </li>
        <li>
          <Link to="/hollywood">Hollywood</Link>
        </li>
        <li>
          <Link to="/technology">Technology</Link>
        </li>
        <li>
          <Link to="/fitness">Fitness</Link>
        </li>
        <li>
          <Link to="/food">Food</Link>
        </li>
      </ul>
      <button onClick={toggleTheme} className="theme-toggle-btn">
        Switch to {theme === "light" ? "Dark 🌙" : "Light ☀️"}
      </button>
    </div>
  );
};

export default NavBar;
