import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setTasks } from '../../App/slices/tasks/tasksSlice';


function FilterList () {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasksState.tasks);
  
  const [alfabetic, setAlfabetic] = useState(true);
  const [date, setDate] = useState(true);
  const [status, setStatus] = useState(true);

  const orderList = (order, field) => {
    const list = Array.from(tasks)
    console.log(list);
    let sortedList;

    if (order === true) {
       sortedList = list.sort((a, b) => {
        if ( a[field] > b[field] ) return 1;
        if ( a[field] < b[field] ) return -1;
        return 0
      });
    } else {
      sortedList = list.sort((a, b) => {
        if ( a[field] > b[field] ) return -1;
        if ( a[field] < b[field] ) return 1;
        return 0
      });
    }

    return sortedList;
  }

  const filterAlfabetic = (order, field) => {
    setAlfabetic(!alfabetic);
    const sorted = orderList(order, field);
    dispatch(setTasks(sorted));
  }

  const filterStatus = (order, field) => {
    setStatus(!status);
    const sorted = orderList(order, field);
    dispatch(setTasks(sorted));
  }
  
  const filterDate = (order, field) => {
    setDate(!date);
    const sorted = orderList(order, field);
    dispatch(setTasks(sorted));
  }

  const changeOrderList = (filter) => {
    switch (filter) {
      case 'alfabetic': return filterAlfabetic(alfabetic, 'taskContent');
      case 'status': return filterStatus(status, 'statusTask');
      default: filterDate(date, 'date');
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