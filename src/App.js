import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import SearchBar from './components/SearchBar';
import UserGrid from './components/UserGrid';
import Features from './components/Features';
import Contact from './components/Contact';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [sortedUsers, setSortedUsers] = useState([]);
  const [roleFilter, setRoleFilter] = useState('');

  useEffect(() => {
    if (searchQuery.length >= 3) {
      fetch(`http://localhost:5000/users`)
        .then(response => response.json())
        .then(data => {
          const filteredData = data.filter(user => 
            user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.ssn.toLowerCase().includes(searchQuery.toLowerCase())
          );
          setUsers(filteredData);
          setSortedUsers(filteredData);
        })
        .catch(error => console.error('Error fetching users:', error));
    }
  }, [searchQuery]);

  useEffect(() => {
    let filteredUsers = [...users];
    if (roleFilter) {
      filteredUsers = filteredUsers.filter(user => user.role === roleFilter);
    }
    setSortedUsers(filteredUsers);
  }, [users, roleFilter]);

  const handleSort = (order) => {
    const sorted = [...sortedUsers].sort((a, b) =>
      order === 'asc' ? a.age - b.age : b.age - a.age
    );
    setSortedUsers(sorted);
  };

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={
            <div>
              <h1 className="my-4">User Explorer <img src="/logo3.png" width="70" height="60" className="d-inline-block align-top" alt="Logo" /></h1>
              <SearchBar setSearchQuery={setSearchQuery} />
              <div className="mb-3">
                <button className="btn btn-secondary mr-2" onClick={() => handleSort('asc')}>Sort by Age (Asc)</button>
                <button className="btn btn-secondary mr-2" onClick={() => handleSort('desc')}>Sort by Age (Desc)</button>
                <select className="form-control w-auto d-inline-block" onChange={(e) => setRoleFilter(e.target.value)}>
                  <option value="">All Roles</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>
              <UserGrid users={sortedUsers} />
            </div>
          } />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
