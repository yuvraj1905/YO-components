import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { mainContentChooser } from "../utils/mainContentChooser";
import { list } from "../utils/ListOfComponents";

const Components = () => {
  const { category } = useParams();
  const activeStyler = ({ isActive }) => ({
    backgroundColor: isActive ? "grey" : "",
    color: isActive ? "white" : "",
  });
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [category]);
  return (
    <div className="componentsPage">
      <div className="navbar">
        <h2>All components</h2>
        {list.map((li) => (
          <NavLink
            style={activeStyler}
            className="unitComponent"
            to={`/components/${li}`}
          >
            {li.charAt(0).toUpperCase() + li.slice(1)}
          </NavLink>
        ))}
      </div>
      <div className="mainComponents">{mainContentChooser(category)}</div>
    </div>
  );
};

export default Components;
