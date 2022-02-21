import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './EditStatus.css';
import { setStatus } from '../../App/slices/tasks/tasksSlice';
import { makePutToServer } from '../../api';

function EditStatus() {
  const selectedTask = useSelector((state) => state.tasksState.selectedTask);
  const dispatch = useDispatch();

  const data = {
    userName: selectedTask.userName,
    taskContent: selectedTask.taskContent,
    status: selectedTask.status,
  };

  const handleClick = async (button) => {
    console.log(button.target.value);
    dispatch(setStatus(false));
    await makePutToServer(data);
  };

  return (
    <div
      className="box-edit-status"
      >
      <div className="title-edit-status">ALTERE O STATUS:</div>
      <div className="buttons-edit-status">
        <button
          type="button"
          value="pending"
          onClick={(button) => {
            handleClick(button);
          }}
        >
          PENDENTE
        </button>
        <button
          type="button"
          value="progress"
          onClick={(button) => {
            handleClick(button);
          }}
        >
          EM PROGRESSO
        </button>
        <button
          type="button"
          value="done"
          onClick={(button) => {
            handleClick(button);
          }}
        >
          CONCLUIDO
        </button>
      </div>
    </div>
  );
}

export default EditStatus;
