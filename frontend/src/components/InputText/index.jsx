import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function InputName() {
  const navigate = useNavigate();
  const [inputText, setInputText] = useState('');
   
  const handleChange = ({target}) => {
    setInputText(target.value)
  }

  const handleClick = () => {
    navigate('/tasks')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/tasks')
    //fazer post userName para estado global
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
