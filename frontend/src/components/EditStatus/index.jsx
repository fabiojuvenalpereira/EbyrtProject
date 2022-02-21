import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './EditStatus.css';
import { setStatus } from '../../App/slices/tasks/tasksSlice';
import { makePutToServer } from '../../api';
import generateDate from '../../utils/generateDate';

function EditStatus() {
  const selectedTask = useSelector((state) => state.tasksState.selectedTask);
  const dispatch = useDispatch();

  const data = {
    _id: selectedTask._id,
    userName: selectedTask.userName,
    taskContent: selectedTask.taskContent,
    statusTask: selectedTask.statusTask,
  };

  const handleClick = async ({target}) => {
    let { statusTask , ...dataContent } = data;
    statusTask = target.value;

    const generatedData = generateDate();
    console.log(generatedData);
    const dataWithNewStatus = {
      ...dataContent,
      statusTask,
      date: generatedData,
    }
    
    console.log(dataWithNewStatus);
  
    await makePutToServer(dataWithNewStatus);

    dispatch(setStatus(false));
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
          value="in progress"
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
