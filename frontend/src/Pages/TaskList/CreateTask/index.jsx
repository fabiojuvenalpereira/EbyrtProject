import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { makePostToServer } from '../../../api/index';
import { setRefresh, setMenu } from '../../../App/slices/tasks/tasksSlice';

import generateObjectToSend from '../../../utils/generateObjectToSend';
import './CreateTask.css';

import addIcon from '../../../images/icons/add_icon.svg';

function CreateTask() {
  const user = useSelector((state) => state.tasksState.user);
  const refresh = useSelector((state) => state.tasksState.refresh);
  const themeMode = useSelector((state) => state.tasksState.themeMode);

  const dispatch = useDispatch();

  const [inputText, setInputText] = useState('');
  const [userName, setUserName] = useState('');
  const initialStatus = 'pending';

  const handleClick = async () => {
    const objectGenerated = await generateObjectToSend(
      userName,
      inputText,
      initialStatus,
    );

    await makePostToServer(objectGenerated);

    setInputText('');
    dispatch(setRefresh(!refresh));
  };

  const mobileMenu = () => {
    dispatch(setMenu('opening-menu'));
  };

  useEffect(() => {
    const getUserFromLocalStorage = JSON.parse(localStorage.getItem('user'));
    setUserName(user !== null ? user : getUserFromLocalStorage);
  }, [inputText]);

  const handleChange = ({ target }) => {
    setInputText(target.value);
  };

  return (
    <div className={`main-content-input-task ${themeMode}`}>
      <div className="main-content-form">
        <div className="create-task-input">
          <input
            type="text"
            className="create-input-task"
            value={inputText}
            onChange={handleChange}
          />
          <button
            type="button"
            name="create-task-button"
            className="create-button"
            onClick={handleClick}
          >
            <img
              className="add-icon"
              src={addIcon}
              alt="add task icon"
            />
          </button>
          <button
            type="button"
            className="mobile-menu"
            onClick={mobileMenu}
          >
            ordenar
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateTask;
