import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setTasks } from '../../App/slices/tasks/tasksSlice';


function FilterList () {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasksState.tasks);
  
  // const [filterBy, setFilterBy] = useState('data');
  const [alfabetic, setAlfabetic] = useState(true);
  const [date, setDate] = useState(true);
  const [status, setStatus] = useState(true);

  const filterAlfabetic = (order) => {
    setAlfabetic(!alfabetic);

    const list = Array.from(tasks)

    console.log(order);

    const sortedList = list.sort((a, b) => {
      console.log(a.taskContent);
      if ( a.taskContent > b.taskContent ) return 1;
      if ( a.taskContent < b.taskContent ) return -1;
      return 0
    });

    dispatch(setTasks(sortedList));
  }

  const filterStatus = (order) => {
    setStatus(!status)
    console.log(order);
  }
  
  const filterDate = (order) => {
    setDate(!date)
    console.log(order);
  }

  const changeOrderList = (filter) => {
    switch (filter) {
      case 'alfabetic': return filterAlfabetic(alfabetic);
      case 'status': return filterStatus(status);
      default: filterDate(date);
    }
  };

  const changeFilter = ({ target }) => {
    changeOrderList(target.value)
  }

  return (
    <div className="change-order">
      <button
        className="data-button"
        value="alfabetic"
        onClick={(event) => changeFilter(event)}
        >
          ordem alfabética
        </button>
      <button
        className="data-button"
        value="date"
        onClick={(event) => changeFilter(event)}
        >
          data
        </button>
      <button
        className="data-button"
        value="status"
        onClick={(event) => changeFilter(event)}
        >
          status
        </button>
    </div>
  )
}

export default FilterList