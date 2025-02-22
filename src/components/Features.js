import React from 'react';

const Features = () => {
  return (
    <><div className="container my-4">
          <h1>Features</h1>
          <p>This application provides a comprehensive user search feature. Key features include:</p>
          <ul>
              <li>Global Search: Search users by first name, last name, or SSN.</li>
              <li>User Grid: Display users in a clean and modern grid layout.</li>
              <li>Sorting: Sort users by age in ascending or descending order.</li>
              <li>Filtering: Filter users by their role (e.g., Admin, User).</li>
              <li>Responsive Design: Ensure a consistent experience across all devices.</li>
          </ul>
      </div>
      <center> <img src="/logo2.png" width="200" height="200" className="d-inline-block align-top" alt="Logo" /> </center> </>
  );
};

export default Features;
