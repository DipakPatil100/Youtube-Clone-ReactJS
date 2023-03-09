import React, { useState } from "react";
import "./Navbar.css";
import { SearchBar } from "./SearchBar";
import logo from "../../images/youtube.png";
import { Link } from "react-router-dom";

export const Navbar = ({ togglebar }) => {
  return (
    <div id="navbar">
      <div className="left-nav">
        <button className="toggle" onClick={() => togglebar()}>
          <i className="fa-solid fa-bars"></i>
        </button>
        <Link to="/" className="logo">
          <img src={logo} alt="" />
          <span>YouTube</span>
        </Link>
      </div>

      <div className="searchbar">
        <SearchBar />
      </div>
    </div>
  );
};

export default Navbar;
