import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

import { useSelector } from 'react-redux'

import CreateTask from '../../components/CreateTask';
import ToDoList from '../../components/ToDoList'
import Header from '../../components/Header';
import EditStatus from '../../components/EditStatus';
import './TaskList.css';


function TaskList() {
  const [editStatus, setEditStatus] = useState(false);

  const selectedTask = useSelector((state) => state.tasksState.value);
  const setStatus = useSelector((state) => state.tasksState.value);
  console.log(setStatus);

  useEffect(() => {
    setEditStatus(true)
  }, [selectedTask]);

  return (
    <div className="main-taskList-Page">
      <div>
        <Header />
      </div>
      { editStatus ? (<EditStatus />) : ('')}
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