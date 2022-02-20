import React from 'react'

import { useSelector } from 'react-redux'

import CreateTask from '../../components/CreateTask';
import ToDoList from '../../components/ToDoList'
import Header from '../../components/Header';
import EditStatus from '../../components/EditStatus';

import './TaskList.css';


function TaskList() {
  const status = useSelector((state) => state.tasksState.status);

  return (
    <div className="main-taskList-Page">

      <div>
        <Header />
      </div>

      { status ? (<EditStatus />) : ('')}

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