import React from 'react';
import "../style/details.css";


const Details = ({ serverData }) => {
    return (
      <>
        {serverData.map((user, index) => (
          <div key={index} className="college-info-card">
            <div className="college-details">
              <h2 className="name">{user.name}</h2>
              <div className="detail">
                <strong>College:</strong> <span>{user.college}</span>
              </div>
              <div className="detail">
                <strong>Id:</strong> <span>{user._id}</span>
              </div>
              <div className="detail">
                <strong>Email:</strong> <span>{user.email}</span>
              </div>
              <div className="detail">
                <strong>Phone Number:</strong> <span>{user.phoneNumber}</span>
              </div>
              <div className="detail">
                <strong>Semester:</strong> <span>{user.semester}</span>
              </div>
              <div className="detail">
                <strong>Created At:</strong> <span>{new Date(user.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };
  
  

export default Details;
