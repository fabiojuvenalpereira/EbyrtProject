import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'

import { fetchTasks } from '../../api/'
import './ToDoList.css';

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  
  useEffect(async () => {
    const response = await fetchTasks();
    setTasks(response)
  }, []);

  const statusConversion = (status) => {
    switch (status) {
      case 'progress':
        return 'EM PROGRESSO';
      case 'pending':
        return 'PENDENTE'
      case 'done':
        return 'PRONTO'
      default: 'done'
        break;
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
        { tasks.map((task) => (
          <div key={task.id} className="task-content-box">
            <div className="task-content-box-static">
              <div className='task-section'>{task.taskContent}</div>
              <div className='task-section'>{task.date}</div>
            </div>
            <div
              className={`task-button ${task.status}`}
              >
              {statusConversion(task.status)}
            </div>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default ToDoList