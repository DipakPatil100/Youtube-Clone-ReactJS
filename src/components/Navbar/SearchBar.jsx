import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <div id="searchbar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          value={searchTerm}
        />
        <span>
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
      </form>
    </div>
  );
};
