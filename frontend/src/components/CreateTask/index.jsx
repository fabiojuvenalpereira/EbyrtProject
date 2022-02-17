import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function CreateTask() {
  const [text,setText] = useState('');
  const [task, setTask] = useState('');
  
  const handleChange = ({ target }) => {
    setText(target.value);
  }

  const handleClick = () => {
    setTask(text)
  }

  useEffect(()=> {
    console.log(text);
  }, [task])

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
            <label htmlFor="create-task-button">
              <button
                type="button"
                name="create-task-button"
                onClick={handleClick}
              >create task</button>
            </label>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateTask