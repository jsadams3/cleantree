import React, { useState } from "react";

import { Dashboard } from "./";
import "./styles.css";

const initialState = {
  inputValue: "",
  searchTerm: "",
  showRepos: false,
};

const App = () => {
  const [state, setState] = useState(initialState);

  const handleInputChange = (e) => {
    setState({
      ...state,
      inputValue: e.target.value,
    });
  };

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  };

  const handleSearch = (e) => {
    setState({
      ...state,
      searchTerm: inputValue,
      showRepos: true,
    });
  };

  const { inputValue, searchTerm, showRepos } = state;

  return (
    <div className="app">
      <div className="search-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search for an organization"
          className="search-input"
          onKeyDown={handleKeypress}
        ></input>
        <input
          id="search"
          type="button"
          onClick={handleSearch}
          value="search"
          className="button search-button"
        ></input>
      </div>
      {showRepos ? <Dashboard searchTerm={searchTerm} /> : null}
    </div>
  );
};

export default App;
