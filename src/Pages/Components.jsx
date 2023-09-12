import React from "react";

const Components = () => {
  const list = [
    "Avatar",
    "Alert",
    "Badge",
    "Button",
    "Card",
    "Headings",
    "Text",
    "Image",
  ];
  return (
    <div className="componentsPage">
      <h2 style={{ marginTop: "2rem" }}>All components</h2>
      <div className="componentsConteiner">
        {list.map((li) => (
          <button className="unitComponent">{li}</button>
        ))}
      </div>
    </div>
  );
};

export default Components;
