import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.css';

function Main() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState();

  const callDashboard = async () => {
    try {
      const res = await fetch('/dashboard', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      const data = await res.json();
      setUserData(data);
      if (!res.ok) {
        throw new Error(res.error);
      }
    } catch (error) {
      console.log(error);
      navigate('/login');
    }
  };

  useEffect(() => {
    callDashboard();
  }, []);

  return (
    <div className="wrapper_dashboard">
      <div className="profile-details">
        <span className="admin_name"></span>
      </div>
      <div className="home-content">
        <div className="overview-boxes">
          <div className="box">
            <div className="right-side" style={{ textAlign: 'center' }}>
              <div className="box-topic">Profile</div>
              <img
                src="https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg"
                style={{ height: '8em', paddingLeft: '2.5em' }}
                alt="none"
              />
              <div className="indicator">
                <ul>
                  <li className='dash'>UserName: {userData?.username} </li>
                  <li className='dash'>Email: {userData?.email} </li>
                  <li className='dash'>Country: {userData?.country} </li>
                  <li className='dash'>Role: {userData?.option}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
