import React, { useState } from 'react';

import './FilterList.css';

import { useDispatch, useSelector } from 'react-redux';
import { setTasks, setMenu} from '../../App/slices/tasks/tasksSlice';
import { useEffect } from 'react';

function FilterList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasksState.tasks);
  const menu = useSelector((state) => state.tasksState.menu);

  const [alfabetic, setAlfabetic] = useState(true);
  const [date, setDate] = useState(true);
  const [status, setStatus] = useState(true);
  const [openCLoseMenu, setOpenCLoseMenu] = useState('');
  

  const orderList = (order, field) => {
    const list = [...tasks];
    let sortedList

    if (order === true) {
      sortedList = list.sort((a, b) => {
        let first = a[field].toLowerCase();
        let second = b[field].toLowerCase();

        if (first > second) return 1;
        if (first < second) return -1;
        return 0
      });
    } else {
      sortedList = list.sort((a, b) => {
        let first = a[field].toLowerCase();
        let second = b[field].toLowerCase();

        if (first > second) return -1;
        if (first < second) return 1;
        return 0
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

  const changeOrderList = ({ target }) => {
    const filter = target.id;

    switch (filter) {
      case 'alfabetic':
        return orderAlfabetic(alfabetic, 'taskContent');
      case 'status':
        return orderStatus(status, 'statusTask');
      case 'date':
        return orderDate(date, 'date');
      default: return '';
    }
  };

  const closeMenu = () => {
    dispatch(setMenu('closing-menu'));
  }

  useEffect(() => {
    setOpenCLoseMenu(menu);
  }, [menu]);

  return (
    <section className={`change-order ${openCLoseMenu}`}>
      <p className="text-order">ordenar por:</p>
      <div className='order-section'>
        <div className="order-section-buttons">
          <div
            className="alfabetic-button"
            id="alfabetic"
            onClick={(event) => changeOrderList(event)}
          >
            tarefa
          </div>
          <div
            className="date-button"
            id="date"
            onClick={(event) => changeOrderList(event)}
          >
            data
          </div>
          <div
            className="status-button"
            id="status"
            onClick={(event) => changeOrderList(event)}
          >
            status
          </div>
          <button
            type='button'
            className='button-close'
            onClick={closeMenu}
            >
            fechar
          </button>
        </div>
      </div>
    </section>
  );
}

export default FilterList;
