import React from 'react';
import { useEffect } from 'react';
// import { useEffect } from 'react';
import { useState } from 'react';

import generateObjectToSend from '../../services/requestData';
import './CreateTask.css';

function CreateTask() {
  const [text, setText] = useState('');
  const [task, setTask] = useState('');

  const initialStatus = 'pending';

  useEffect(() => {
    setTask(text)
  },[text]);

  const handleChange = ({ target }) => {
    setText(target.value);
  };

  const handleClick = () => {
    setTask(text)
    const userName = JSON.parse(localStorage.getItem('userName'));
    generateObjectToSend(userName, task, initialStatus);
    //fazer request de post para criar.
  };

  return (
    <div className="main-content-input-task">
      <form action="post">
        <div className="main-content-form">
          <label htmlFor="create-task-input" className="create-task-input">
            <input
              type="text"
              name="createTaskInput"
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
      </form>
    </div>
  );
}

export default CreateTask;
