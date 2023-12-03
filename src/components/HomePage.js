// HomePage.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchWord, addToHistory } from "../actions/dictionaryActions";
import { Link } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    dispatch(searchWord(searchTerm));
    dispatch(addToHistory(searchTerm));
    setSearchTerm("");
  };

  return (
    <div className="home-page">
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Link to={`/word/${searchTerm}`}>
          <button onClick={handleSearch}>Search</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;