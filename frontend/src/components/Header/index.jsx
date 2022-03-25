import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

import './Header.css';

import logo from '../../images/logo.png';
import darkMode from '../../images/icons/darkMode.svg';
import lightMode from '../../images/icons/lightMode.svg';

import { setTheme, setThemeMode } from '../../App/slices/tasks/tasksSlice';

function Header() {
  const user = useSelector((state) => state.tasksState.user);
  const theme = useSelector((state) => state.tasksState.theme);
  const themeMode = useSelector((state) => state.tasksState. themeMode);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  
  const [userName, setUserName] = useState('');
  const [anim, setAnim] = useState('');

  const animation = () => {
    const TIMER = 500;
    setAnim('anim');
    setTimeout(() => {
      setAnim('');
    }, TIMER);
  }

  const switchTheme = () =>{
    animation();
    console.log(theme);
    if (theme === false) dispatch(setThemeMode('dark-theme'));
    if (theme === true) dispatch(setThemeMode('light-theme'));
    dispatch(setTheme(!theme))
  }

  const exit = () => {
    localStorage.clear();
    navigate('/') 
  }

  useEffect(() => {
    const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));
    setUserName(user !== null ? user : userFromLocalStorage);
  }, [user]);

  return (
    <div className={`main-header-content ${ themeMode}`}>
      <div className="logo-header-content">
        <img src={logo} alt="logo" className="logo" />
        <div
        className={`switch-theme ${anim}`}
        onClick={ switchTheme }
          >
            {
              themeMode === 'dark-theme' ?
              ( <img src={ lightMode } alt="light theme" /> )
              :
              ( <img src={ darkMode } alt="dark theme" /> )
            }
        </div>
      </div>
      <div className="text-header-content">
        <p className="text-header">olá,</p>
        <div className="text-header-name">{userName}</div>
      </div>
      <button
        type="button"
        className="exit-button"
        onClick={ exit }
      >
        Sair
      </button>
    </div>
  );
}

export default Header;
