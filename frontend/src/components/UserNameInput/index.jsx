import React from 'react';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../App/slices/tasks/tasksSlice';

import './UserNameInput.css';

function InputName() {
  const navigate = useNavigate();
  const [inputText, setInputText] = useState('');

  const dispatch = useDispatch();

  const saveUser = () => {
    dispatch(setUser(inputText));
    localStorage.setItem('userName', JSON.stringify(inputText));
    navigate('/tasks');
  };

  const handleChange = ({target}) => {
    setInputText(target.value)
  }

  const handleClick = () => {
    saveUser();
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    saveUser();
  }

  return (
    <div className='main-input'>
      <form onSubmit={handleSubmit}>
        <div className='input-text'>
          <label htmlFor='textInput' >
            <input
              type="text"
              name="textIput"
              className='input-text-bar'
              value={inputText}
              onChange={ handleChange }
            />
          </label>
        </div>
        <div
          className='enter-button'
          onClick={handleClick}>
          entrar
        </div>
      </form>
    </div>
  );
}

export default InputName;
