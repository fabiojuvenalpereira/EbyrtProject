import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'

import { fetchTasks } from '../../api/'


function ToDoList() {
  const [tasks, setTasks] = useState([]);
  
  useEffect(async () => {
    const response = await fetchTasks();
    console.log(response);
    setTasks(response)
  },[]);
  
  return (
    <div className="main-content">
      <div>
        { tasks.map((task) => {
          <div key={task.id}>task.id</div>
          })
        }
      </div>
    </div>
  )
}

export default ToDoList