import React, { useState, useEffect } from 'react';
import '../static/stylesheet/profile.css';
import { useLocation } from 'react-router-dom';

export default function Profile({ show, onClose }) {
  const [userInfo, setUserInfo] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      setUserInfo(JSON.parse(userData));
    } else {
      console.log('User data not found');
    }
  }, []);

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
              <div>Name: {userInfo.name}</div>
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