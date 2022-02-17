import React from 'react'

import CreateTask from '../../components/CreateTask';
import ToDoList from '../../components/ToDoList'

import './TaskList.css';

function TaskList() {
  return (
    <div className="main-taskList-Page">
      <div className='create-task-box'>
        <CreateTask />
      </div>
      <div className="task-list-box">
        <ToDoList />
      </div>
    </div>
  )
}

export default TaskList;