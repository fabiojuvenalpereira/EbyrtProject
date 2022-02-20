import React from 'react';

import './UserNameInput.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../App/slices/tasks/tasksSlice';

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
    saveUser();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    saveUser();
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
              value={userNameInput}
              onChange={handleChange}
            />
          </label>

        </div>

        <div className="enter-button" disabled="true" onClick={handleClick}>
          entrar
        </div>

      </form>

    </div>
  );
}

export default InputName;
