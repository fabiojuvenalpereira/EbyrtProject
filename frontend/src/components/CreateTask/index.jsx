import React from 'react';

import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import {makePostToServer} from '../../api/index';
import { setRefresh } from '../../App/slices/tasks/tasksSlice';

import generateObjectToSend from '../../services/requestData';
import './CreateTask.css';

function CreateTask() {
  const user = useSelector((state) => state.tasksState.user);
  const refresh = useSelector((state) => state.tasksState.refresh);
  const dispatch = useDispatch();

  const [text, setText] = useState('');
  const [task, setTask] = useState('');
  const [userName, setUserName] = useState('');

  const initialStatus = 'pending';

  useEffect(() => {
    setTask(text);
    const getUserFromLocalStorage = JSON.parse(localStorage.getItem('user'));
    setUserName(user !== null ? user : getUserFromLocalStorage)
  }, [text]);

  const handleChange = ({ target }) => {
    setText(target.value);
  };

  const handleClick = async () => {
    setTask(text);

    dispatch(setRefresh(!refresh))
    const objetoFormatado = await generateObjectToSend(userName, task, initialStatus);
    
    makePostToServer(objetoFormatado);
  };

  return (
    <div className="main-content-input-task">

      <div>

        <div className="main-content-form">
          <label htmlFor="create-task-input" className="create-task-input">
            <input
              type="text"
              name="create-task-input"
              className="create-input-task"
              value={text}
              onChange={handleChange}
            />
          </label>

          <div>
            <label htmlFor="create-task-button" className="create-button-label">
              <button
                type="button"
                name="create-task-button"
                className="create-button"
                onClick={handleClick}
              >
                create task
              </button>
            </label>
          </div>
        </div>

      </div>

    </div>
  );
}

export default CreateTask;
