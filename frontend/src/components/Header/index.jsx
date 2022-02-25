import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import './Header.css';
import logo from '../../images/logo.png';

function Header() {
  const user = useSelector((state) => state.tasksState.user);

  const [userName, setUserName] = useState('');

  useEffect(() => {
    const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));
    setUserName(user !== null ? user : userFromLocalStorage);
  }, [user]);

  return (
    <div className="main-header-content">
      <div className="logo-header-content">
        <img src={logo} alt="logo" />
      </div>

      <div className="text-header-content">
        <p className="text-header">olá,</p>
        <div className="text-header-name">{userName}</div>
      </div>
    </div>
  );
}

export default Header;
