import React, { useState } from 'react';

import './UserNameInput.css';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../App/slices/tasks/tasksSlice';

function InputName() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userNameInput, setUserNameInput] = useState('');

  const saveUser = () => {
    localStorage.setItem('user', JSON.stringify(userNameInput));
    dispatch(setUser(userNameInput));
    navigate('/tasks');
  };

  const handleChange = ({ target }) => {
    setUserNameInput(target.value);
  };

  const handleClick = () => {
    const lastCaracter = userNameInput[userNameInput.length - 1];
    if (userNameInput.length >= 5 && lastCaracter !== ' ') {
      saveUser();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleClick();
  };

  return (
    <div className="main-input">

      <form onSubmit={handleSubmit}>

        <div className="input-text">

          <label htmlFor="textInput">
            <input
              type="text"
              name="textIput"
              className="input-text-bar"
              placeholder="Digite Seu Usuário"
              value={userNameInput}
              onChange={handleChange}
            />
          </label>

        </div>

        <div aria-hidden="true" className="enter-button" onClick={handleClick}>
          entrar
        </div>

      </form>

    </div>
  );
}

export default InputName;
