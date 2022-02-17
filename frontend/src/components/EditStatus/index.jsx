import React from 'react'

import './EditStatus.css';

function EditStatus() {
  const handleClick = (button) => {
    console.log(button.target.value);
  }

  return (
    <div className='box-edit-status'> 
      <div className='title-edit-status'>
        ALTERE O STATUS:
      </div>
      <div className='buttons-edit-status'>
        <button
          type='button'
          value='pending'
          onClick={ (button) => { handleClick(button) }}
          >
            PENDENTE
        </button>
        <button
          type='button'
          value='progress'
          onClick={ (button) => { handleClick(button) }}
          >
            EM PROGRESSO
          </button>
        <button
          type='button'
          value='done'
          onClick={ (button) => { handleClick(button) }}
          >
            CONCLUIDO
          </button>
      </div>
    </div>
  )
}

export default EditStatus