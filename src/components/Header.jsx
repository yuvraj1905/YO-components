import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h2>YO-Components</h2>
      <span className="searchBar">
        <input type="text" placeholder="search for components" name="" id="" />
        <button>Search</button>
      </span>
      <span className="navlinks">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/components">Components</NavLink>
        <NavLink to="/installation">Installation</NavLink>
      </span>
    </div>
  );
};

export default Header;
