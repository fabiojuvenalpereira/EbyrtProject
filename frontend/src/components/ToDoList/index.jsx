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
  }, [tasks]);
  
  return (
    <div>

    </div>
  )
}

export default ToDoList