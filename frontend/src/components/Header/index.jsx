import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Header.css';
import logo from '../../images/logo.png';
import { setTheme } from '../../App/slices/tasks/tasksSlice';

function Header() {
  const user = useSelector((state) => state.tasksState.user);
  const theme = useSelector((state) => state.tasksState.theme);
  
  const dispatch = useDispatch();
  
  const [userName, setUserName] = useState('');
  const [switchThemeState, setSwitchThemeState] = useState('light-theme');

  useEffect(() => {
    const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));
    setUserName(user !== null ? user : userFromLocalStorage);
  }, [user]);


  const switchTheme = () =>{
    if (theme === false) setSwitchThemeState('dark-theme')
    if (theme === true) setSwitchThemeState('light-theme')
    dispatch(setTheme(!theme))
  }

  return (
    <div className={`main-header-content ${switchThemeState}`}>
      <div className="logo-header-content">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <button
        className="switch-theme"
        onClick={ switchTheme }
          >
            trocar
        </button>
      </div>
      <div className="text-header-content">
        <p className="text-header">olá,</p>
        <div className="text-header-name">{userName}</div>
      </div>
    </div>
  );
}

export default Header;
