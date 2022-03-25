import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './ToDoList.css';

import statusConversion from '../../../utils/statusConversion';
import { fetchTasks, makeDeleteToServer } from '../../../api';
import {
  selectedTask,
  setStatus,
  setRefresh,
  setTasks,
  setEditTask,
} from '../../../App/slices/tasks/tasksSlice';

import Loading from '../../../components/Loading';

function ToDoList() {
  const refresh = useSelector((state) => state.tasksState.refresh);
  const tasks = useSelector((state) => state.tasksState.tasks);
  const themeMode = useSelector((state) => state.tasksState.themeMode);

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const fetch = async () => {
    setLoading(true);

    const user = JSON.parse(localStorage.getItem('user'));

    const response = await fetchTasks();
    const filteredByName = response.filter((task) => task.userName === user);

    dispatch(setTasks(filteredByName));
  };

  const handleClick = (button, taskContent) => {
    const { target } = button;

    if (target.id === 'task-content') {
      dispatch(setEditTask(true));
      dispatch(selectedTask(taskContent));
    }

    if (target.id === 'status') {
      dispatch(setStatus(true));
      dispatch(selectedTask(taskContent));
    }
  };

  const deleteTask = async ({ _id: id }) => {
    await makeDeleteToServer(id);

    dispatch(setRefresh(!refresh));
  };

  useEffect(() => {
    fetch();

    setLoading(false);
  }, [refresh]);

  return (
    <div className={`main-content ${themeMode}`}>
      {loading ? <Loading /> : tasks.map((task) => (
        // eslint-disable-next-line no-underscore-dangle
        <div key={task._id} className="task-content-card">
          <div className="left-side-content-card">
            <div
              aria-hidden="true"
              id="task-content"
              className="task-content-text"
              onClick={(button) => handleClick(button, task)}
            >
              {task.taskContent}
            </div>
            <div className="task-content-date">
              <div>{task.date}</div>
            </div>
          </div>
          <div className="right-content-text">
            <div
              aria-hidden="true"
              id="status"
              className={`task-status-button  ${task.statusTask} `}
              onClick={(button) => handleClick(button, task)}
            >
              {statusConversion(task.statusTask)}
            </div>
            <div
              aria-hidden="true"
              className="task-delete-button block-select"
              onClick={() => deleteTask(task)}
            >
              Deletar
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ToDoList;
