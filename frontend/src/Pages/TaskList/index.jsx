import React from 'react'

import { useSelector } from 'react-redux'

import CreateTask from '../../components/CreateTask';
import ToDoList from '../../components/ToDoList'
import Header from '../../components/Header';
import EditStatus from '../../components/EditStatus';

import '../../styles/TaskList.css';


function TaskList() {
  const status = useSelector((state) => state.tasksState.status);

  return (
    <div className="main-taskList-Page">
        <Header />
        <CreateTask />
      <div className="task-list-box">
        { status ? (<EditStatus />) : ('')}
        <ToDoList />
      </div>
    </div>
  )
}

export default TaskList;