import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Bollywood from "./component/Bollywood";
import Hollywood from "./component/Hollywood";
import Technology from "./component/Technology";
import Fitness from "./component/Fitness";
import Food from "./component/Food";
import NavBar from "./component/NavBar";
import Details from "./component/Details";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className={theme}>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bollywood" element={<Bollywood />} />
            <Route path="/hollywood" element={<Hollywood />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/food" element={<Food />} />

            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
