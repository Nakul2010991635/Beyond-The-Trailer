import React, { useState, useEffect } from 'react';
import '../static/stylesheet/profile.css';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

export default function Profile({ show, onClose }) {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken._id;
      fetchUserInfo(userId);
    } else {
      console.log('User is not logged in');
    }
  }, []);

  const fetchUserInfo = async () => {
	try {
	  const token = localStorage.getItem('token');
	  const decodedToken = jwtDecode(token);
	  const userId = decodedToken._id;
  
	  const response = await axios.get(`/api/users/${userId}`, {
		headers: {
		  Authorization: `Bearer ${token}`,
		},
	  });
	  setUserInfo(response.data);
	} catch (error) {
	  console.error('Error fetching user information:', error);
	}
  };

  return (
    <>
      <section className="profile-offcanvas" style={{ left: show ? '0px' : '-400px' }}>
        <div className="close-btn" style={{ textAlign: 'right' }}>
          <button
            className="btn btn-dark"
            onClick={onClose}
            style={{
              background: 'none',
              outline: 'none',
              border: 'none',
              boxShadow: 'none',
              fontSize: '2rem',
            }}
          >
            &#10006;
          </button>
        </div>
        <div>
          <h3 className="product-heading history-h">
            <span style={{ display: 'inline-block', borderTop: '.2rem solid white', paddingTop: '0.2rem' }}>
              Your Profile
            </span>
          </h3>
          {userInfo ? (
            <div id="profile-container">
              <div>Name: {userInfo.firstName} {userInfo.lastName}</div>
              <div>Email: {userInfo.email}</div>
            </div>
          ) : (
            <div id="profile-container">Loading...</div>
          )}
        </div>
      </section>
    </>
  );
}