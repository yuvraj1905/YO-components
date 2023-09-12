import React from "react";
import logo from "./logo.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="homePage">
      <div className="mainContent">
        <img src={logo} alt="logo" className="logo" />
        <h1>
          Welcome to{" "}
          <span
            style={{
              color: "grey",
              fontSize: "2.5rem",
            }}
          >
            YO-Components
          </span>
        </h1>
        <p>A collection of innovative components for modern web development</p>
        <button onClick={() => navigate("/installation")}>Get Started</button>
      </div>
    </div>
  );
};

export default Home;
