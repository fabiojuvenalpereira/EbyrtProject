import React from 'react'

import CreateTask from '../../components/CreateTask';
import ToDoList from '../../components/ToDoList'

function TaskList() {
  return (
    <div className="main-taskList-Page">
      <div className='create-task'>
        <CreateTask />
      </div>
      <div className="task-list">
        <ToDoList />
      </div>
    </div>
  )
}

export default TaskList;