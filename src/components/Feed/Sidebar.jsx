import React from "react";
import "./feed.css";
import { data } from "../../utils/sidebarData";
import { NavLink } from "react-router-dom";

const Sidebar = (props) => {
  const { selectedCategory, setSelectedCategory } = props;
  // console.log(data);
  return (
    <div id="sidebar-btn">
      {data.map((item, index) => {
        console.log(item.img);
        return (
          <NavLink key={index} onClick={() => setSelectedCategory(item.title)}>
            {item.img}
            {item.title}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Sidebar;
