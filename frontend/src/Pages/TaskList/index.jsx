import React from 'react'

import { useSelector } from 'react-redux'

import CreateTask from './CreateTask';
import ToDoList from './ToDoList'
import Header from '../../components/Header';
import EditStatus from '../../components/EditStatus';
import Footer from '../../components/Footer';
import FilterList from '../../components/FilterList/';

import './TaskList.css';


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
        <ToDoList />
      </div>
      <div className="footer-content">
        <Footer />
      </div>
    </div>
  )
}

export default TaskList;