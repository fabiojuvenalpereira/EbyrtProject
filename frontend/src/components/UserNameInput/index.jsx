import React from 'react';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../App/slices/tasks/tasksSlice';


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
    <div>
      <form onSubmit={handleSubmit}>
        <div className='input-text'>
          <label htmlFor='textInput' >
            <input
              type="text"
              name="textIput"
              value={inputText}
              onChange={ handleChange }
            />
          </label>
        </div>
        <div onClick={handleClick}>
          entrar
        </div>
      </form>
    </div>
  );
}

export default InputName;
