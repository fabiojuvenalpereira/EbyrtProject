import React from 'react';
import { useDispatch } from 'react-redux';

import './EditStatus.css';
import { setStatus } from '../../App/slices/tasks/tasksSlice';


function EditStatus() {
  const dispatch = useDispatch()

  const handleClick = (button) => {
    dispatch(setStatus(false));
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