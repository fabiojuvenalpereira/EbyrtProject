import React from 'react';
import { useSelector } from 'react-redux';

import './TaskList.css';

import CreateTask from './CreateTask';
import ToDoList from './ToDoList';
import Header from '../../components/Header';
import EditStatus from '../../components/EditStatus';
import Footer from '../../components/Footer';
import FilterList from '../../components/FilterList';
import EditTask from '../../components/EditTask';

function TaskList() {
  const status = useSelector((state) => state.tasksState.status);
  const editTask = useSelector((state) => state.tasksState.editTask);
  const themeMode = useSelector((state) => state.tasksState.themeMode);

  return (
    <div className={`main-task-list-page ${themeMode}`}>
      <Header />
      <div className="create-and-classify">
        <CreateTask />
      </div>
      <FilterList />
      <main className="task-list-box">
        <div className="floating-box">
          { status ? (<EditStatus />) : ('')}
          { editTask ? (<EditTask />) : ('') }
        </div>
        <ToDoList />
      </main>
      <div className="footer-content">
        <Footer />
      </div>
    </div>
  );
}

export default TaskList;
