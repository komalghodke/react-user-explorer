import React, { useState } from 'react';

const SearchBar = ({ setSearchQuery }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
    if (event.target.value.length >= 3) {
      setSearchQuery(event.target.value);
    }
  };

  const handleSearch = () => {
    if (query.length >= 3) {
      setSearchQuery(query);
    }
  };

  return (
    <div className="input-group mb-3 shadow-sm">
      <input
        type="text"
        className="form-control"
        placeholder="Search by first name, last name, or SSN"
        value={query}
        onChange={handleChange}
      />
      <div className="input-group-append">
        <button className="btn btn-primary" onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
