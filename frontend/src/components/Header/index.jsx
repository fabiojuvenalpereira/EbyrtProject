import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import '../../styles/Header.css';

function Header() {
  const user = useSelector((state) => state.tasksState.user);

  const [userName, setUserName] = useState('');

  useEffect(() => {
    const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));
    setUserName(user !== null ? user : userFromLocalStorage);
  }, [user]);

  return (
    <div className="main-header-content">

      <div className="title-header-content">
        <p>TO DO LIST</p>
      </div>

      <div className="user-header-content">
        NAME:
        <div className="user-header-content-name">{userName}</div>
      </div>

    </div>
  );
}

export default Header;
