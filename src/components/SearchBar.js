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
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control shadow-sm"
        placeholder="Search by first name, last name, or SSN"
        value={query}
        onChange={handleChange}
      />
      <div className="input-group-append">
        <button className="btn btn-primary shadow" onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
