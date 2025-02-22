import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{user.firstName} {user.lastName}</h5>
        <p className="card-text"><strong>SSN:</strong> {user.ssn}</p>
        <p className="card-text"><strong>Age:</strong> {user.age}</p>
        <p className="card-text"><strong>Role:</strong> {user.role}</p>
      </div>
    </div>
  );
};

export default UserCard;
