import React from 'react'

import UserNameInput from '../../components/UserNameInput';
import './Home.css';

function Home() {
  return (
    <div className="main-home">
      <div className="main-content">
        <div className="title-page">
          <p className='main-title'>TO DO LIST</p>
        </div>
        <div className="input-text">
          <UserNameInput />
        </div>
      </div>
    </div>
  )
}

export default Home