import React from 'react';
// import { useEffect } from 'react';
import { useState } from 'react';

function InputName() {
  const [inputText, setInputText] = useState('');
  
  const handleChange = ({target}) => {
    setInputText(target.value)
  }

  return (
    <div>
      <form action="post">
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
      </form>
    </div>
  );
}

export default InputName;
