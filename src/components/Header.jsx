import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import { list } from "../utils/ListOfComponents";

const Header = () => {
  const navigate = useNavigate();
  const [inputSearch, setInputSearch] = useState("");
  const searchHandler = () => {
    if (inputSearch.length < 1) {
      alert("Please enter a valid input");
    } else if (
      list.find((title) => title.toLowerCase() === inputSearch.toLowerCase())
    ) {
      navigate(`/components/${inputSearch}`);
      setInputSearch("");
    } else {
      alert("This component is not available");
    }
  };
  const searchEnterHandler = (e) => {
    if (e.key === "Enter") {
      searchHandler();
    }
  };

  return (
    <div className="header">
      <h2
        onClick={() => {
          navigate("/");
        }}
        className="cursorPointer"
      >
        YO-Components
      </h2>
      <span className="searchBar">
        <input
          type="text"
          placeholder="search for components"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          onKeyDown={searchEnterHandler}
        />
        <button onClick={searchHandler}>Search</button>
      </span>
      <span className="navlinks">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/components/alert">Docs</NavLink>
        <a
          href="https://github.com/yuvraj1905/YO-components"
          target="_blank"
          rel="noreferrer noopener"
        >
          <BsGithub size={24} />
        </a>
      </span>
    </div>
  );
};

export default Header;
