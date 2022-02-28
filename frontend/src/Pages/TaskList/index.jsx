import React from 'react'
import { useSelector } from 'react-redux'

import './TaskList.css';

import CreateTask from './CreateTask';
import ToDoList from './ToDoList'
import Header from '../../components/Header';
import EditStatus from '../../components/EditStatus';
import Footer from '../../components/Footer';
import FilterList from '../../components/FilterList/';
import EditTask from '../../components/EditTask';


function TaskList() {
  const status = useSelector((state) => state.tasksState.status);

  return (
    <div className="main-task-list-page">
        <Header />
      <div className="create-and-classify">
        <CreateTask />
        <FilterList />
      </div>
      <div className="task-list-box">
        { status ? (<EditStatus />) : ('')}
        <EditTask />
        <ToDoList />
      </div>
      <div className="footer-content">
        <Footer />
      </div>
    </div>
  )
}

export default TaskList;