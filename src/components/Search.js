import React, { useEffect, useState } from "react";

const Search = props => {
  const [searchText, setSearchText] = useState("");
  useEffect(
    () => {
      props.onSearch(searchText);
    },
    [props, searchText]
  );
  return (
    <div>
      <form className="d-flex ">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchText}
          onChange={e => {
            setSearchText(e.target.value);
          }}
        />
        <button className="btn btn-warning" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
