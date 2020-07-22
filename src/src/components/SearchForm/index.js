import React from "react";
import "./style.css";


function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          value={props.value}
          onChange={props.handleInputChange}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search Our Employee"
          id="search"
        />
      </div>
    </form>
  );
}

export default SearchForm;