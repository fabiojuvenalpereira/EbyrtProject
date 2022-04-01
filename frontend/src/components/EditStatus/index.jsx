import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './EditStatus.css';
import { setRefresh, setStatus } from '../../App/slices/tasks/tasksSlice';
import { makePutToServer } from '../../api';
import generateDate from '../../utils/generateDate';

function EditStatus() {
  const selectedTask = useSelector((state) => state.tasksState.selectedTask);
  const refresh = useSelector((state) => state.tasksState.refresh);
  const dispatch = useDispatch();

  const [close, setClose] = useState('');

  const data = {
    // eslint-disable-next-line no-underscore-dangle
    _id: selectedTask._id,
    userName: selectedTask.userName,
    taskContent: selectedTask.taskContent,
    statusTask: selectedTask.statusTask,
  };

  const TIMER = 200;

  const handleClick = async ({ target }) => {
    setClose('closing');

    // eslint-disable-next-line prefer-const
    let { statusTask, ...dataContent } = data;

    statusTask = target.value;
    const generatedData = generateDate();
    const dataWithNewStatus = {
      ...dataContent,
      statusTask,
      date: generatedData,
    };

    await makePutToServer(dataWithNewStatus);

    setTimeout(() => {
      dispatch(setStatus(false));
      dispatch(setRefresh(!refresh));
    }, TIMER);
  };

  const closeWindow = () => {
    setClose('closing');

    setTimeout(() => {
      dispatch(setStatus(false));
    }, TIMER);
  };

  const escFunction = ({ key }) => {
    if (key === 'Escape') {
      setClose('closing');

      setTimeout(() => {
        dispatch(setStatus(false));
      }, TIMER);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);
    setClose();
  }, []);

  return (
    <div className={`box-edit-status ${close}`}>
      <div className="header-edit-box block-select">
        <button
          type="button"
          className="close-button-status block-select"
          onClick={closeWindow}
        >
          X
        </button>
        <div className="title-edit-status">ALTERE O STATUS:</div>
      </div>
      <div className="buttons-edit-status block-select">
        <button
          type="button"
          value="pending"
          className="pending"
          onClick={(button) => {
            handleClick(button);
          }}
        >
          PENDENTE
        </button>
        <button
          type="button"
          value="in progress"
          className="progress"
          onClick={(button) => {
            handleClick(button);
          }}
        >
          EM PROGRESSO
        </button>
        <button
          type="button"
          value="done"
          className="done"
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
