import React, { useState } from 'react';

import './FilterList.css';

import { useDispatch, useSelector } from 'react-redux';
import { setTasks } from '../../App/slices/tasks/tasksSlice';

function FilterList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasksState.tasks);

  const [alfabetic, setAlfabetic] = useState(true);
  const [date, setDate] = useState(true);
  const [status, setStatus] = useState(true);
  const [menu, setMenu] = useState(true);

  const orderList = (order, field) => {
    const list = Array.from(tasks);
    let sortedList;

    if (order === true) {
      sortedList = list.sort((a, b) => {
        if (a[field] > b[field]) return 1;
        if (a[field] < b[field]) return -1;
        return 0;
      });
    } else {
      sortedList = list.sort((a, b) => {
        if (a[field] > b[field]) return -1;
        if (a[field] < b[field]) return 1;
        return 0;
      });
    }

    return sortedList;
  };

  const orderAlfabetic = (order, field) => {
    setAlfabetic(!alfabetic);
    const sorted = orderList(order, field);
    dispatch(setTasks(sorted));
  };

  const orderStatus = (order, field) => {
    setStatus(!status);
    const sorted = orderList(order, field);
    dispatch(setTasks(sorted));
  };

  const orderDate = (order, field) => {
    setDate(!date);
    const sorted = orderList(order, field);
    dispatch(setTasks(sorted));
  };

  const changeOrderList = (filter) => {
    switch (filter) {
      case 'alfabetic':
        return orderAlfabetic(alfabetic, 'taskContent');
      case 'status':
        return orderStatus(status, 'statusTask');
      default:
        orderDate(date, 'date');
    }
  };

  const changeFilter = ({ target }) => {
    changeOrderList(target.value);
  };

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="change-order">
      <div className="mobile-menu" onClick={ toggleMenu }>
        ordenar por:
      </div>
      <div className='order-section'>
        <p>ordenar por:</p>
        <ul className="order-section-buttons">
          <li
            className="alfabetic-button"
            value="alfabetic"
            onClick={(event) => changeFilter(event)}
          >
            tarefa
          </li>
          <li
            className="date-button"
            value="date"
            onClick={(event) => changeFilter(event)}
          >
            data
          </li>
          <li
            className="status-button"
            value="status"
            onClick={(event) => changeFilter(event)}
          >
            status
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FilterList;
