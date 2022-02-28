import React, { useState } from 'react';

import './FilterList.css';

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

  const orderAlfabetic = (order, field) => {
    setAlfabetic(!alfabetic);
    const sorted = orderList(order, field);
    dispatch(setTasks(sorted));
  }

  const orderStatus = (order, field) => {
    setStatus(!status);
    const sorted = orderList(order, field);
    dispatch(setTasks(sorted));
  }
  
  const orderDate = (order, field) => {
    setDate(!date);
    const sorted = orderList(order, field);
    dispatch(setTasks(sorted));
  }

  const changeOrderList = (filter) => {
    switch (filter) {
      case 'alfabetic': return orderAlfabetic(alfabetic, 'taskContent');
      case 'status': return orderStatus(status, 'statusTask');
      default: orderDate(date, 'date');
    }
  };

  const changeFilter = ({ target }) => {
    changeOrderList(target.value)
  }

  return (
    <div className="change-order">
      <div
        className="alfabetic-button"
        value="alfabetic"
        onClick={(event) => changeFilter(event)}
        >
          ordem alfabética
        </div>
      <div
        className="date-button"
        value="date"
        onClick={(event) => changeFilter(event)}
        >
          data
        </div>
      <div
        className="status-button"
        value="status"
        onClick={(event) => changeFilter(event)}
        >
          status
        </div>
    </div>
  )
}

export default FilterList