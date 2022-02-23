import React from 'react';

import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import statusConversion from '../../../utils/statusConversion';
import { fetchTasks, makeDeleteToServer } from '../../../api/';
import {
  selectedTask,
  setStatus,
  setRefresh,
} from '../../../App/slices/tasks/tasksSlice';

import './ToDoList.css';

function ToDoList() {
  const refresh = useSelector((state) => state.tasksState.refresh);
  const dispatch = useDispatch();

  const [tasks, setTasks] = useState([]);

  useEffect(async () => {
    const response = await fetchTasks();
    setTasks(response);
  }, [refresh]);

  const handleClick = (button, taskContent) => {
    const { target } = button;

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
      <div className="task-title-box">
        <div className="title-tasl">TAREFA</div>
        <div className="title-date">DATA E HORA</div>
        <div className="title-status">STATUS</div>
      </div>

      <div className="main-tasks-box">
        {tasks.map((task) => (
          <div key={task._id} className="task-box-content">
            <div
              id="taskContent"
              className="task-content-box-static"
              onClick={(button) => handleClick(button, task)}
            >
              <div className="task-section-content">{task.taskContent}</div>
              <div className="task-section-date">{task.date}</div>
            </div>
            <div className="task-buttons-box">
              <div
                id="status"
                className={`task-button status ${task.statusTask}`}
                onClick={(button) => handleClick(button, task)}
              >
                {statusConversion(task.statusTask)}
              </div>

              <div
                className="task-button delete"
                onClick={() => deleteTask(task)}
              >
                deletar
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
