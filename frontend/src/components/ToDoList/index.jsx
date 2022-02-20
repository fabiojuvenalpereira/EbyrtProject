import React from 'react';

import { useState } from 'react';
import { useEffect } from 'react';
import { fetchTasks } from '../../api/';
import { useDispatch } from 'react-redux';
import { selectedTask, setStatus } from '../../App/slices/tasks/tasksSlice';

import './ToDoList.css';

function ToDoList() {
  const dispatch = useDispatch();
  const [tasks, setTasks] = useState([]);

  const statusConversion = (status) => {
    switch (status) {
      case 'in progress':
        return 'EM PROGRESSO';
      case 'pending':
        return 'PENDENTE';
      case 'done':
        return 'PRONTO';
      default:
        'done';
        break;
    }
  };

  useEffect(async () => {
    const response = await fetchTasks();
    setTasks(response);
  }, []);

  const handleClick = (button, task) => {
    const { target } = button;
    if (target.id === 'status') {
      dispatch(setStatus(true));
      dispatch(selectedTask(task));
    }
  };

  return (
    <div className="main-content">

      <div className="task-title-box">
        <div className="task-title">TAREFA</div>
        <div className="task-title">DATA E HORA</div>
        <div className="task-title">STATUS</div>
      </div>

      <div className="main-tasks-box">
        {tasks.map((task) => (
          <div key={task._id} className="task-content-box">

            <div
              className="task-content-box-static"
              onClick={(button) => handleClick(button, task)}
              >
              <div className="task-section">{task.taskContent}</div>
              <div className="task-section">{task.date}</div>
            </div>

            <div
              id="status"
              className={`task-status-button ${task.status}`}
              onClick={(button) => handleClick(button, task)}
            >
              {statusConversion(task.status)}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default ToDoList;
