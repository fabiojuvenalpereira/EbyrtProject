import React, { useState, useEffect }from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './ToDoList.css';

import statusConversion from '../../../utils/statusConversion';
import { fetchTasks, makeDeleteToServer } from '../../../api/';
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
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const fetch = async () => {
    setLoading(true);

    const response = await fetchTasks();

    dispatch(setTasks(response));
  }

  useEffect(() => {
    fetch();

    setLoading(false);
  }, [refresh]);

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

  return (
    <div className="main-content">
      {loading ? <Loading /> : tasks.map((task) => (
        <div key={task._id} className="task-content-card">
          <div className="left-side-content-card">
            <div
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
              id="status"
              className={`task-status-button  ${task.statusTask}`}
              onClick={(button) => handleClick(button, task)}
            >
              {statusConversion(task.statusTask)}
            </div>
            <div
              className="task-delete-button"
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
