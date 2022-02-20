import React from 'react'

import Footer from '../../components/Footer';
import UserNameInput from '../../components/UserNameInput';

import './Home.css';

function Home() {
  return (
    <div className="main-home">

      <div className="main-content">

        <div className="title-page">
          <p className='main-title'>TO DO LIST</p>

          <div className="input-text">
            <UserNameInput />
          </div>
        </div>

      </div>
        <Footer />
    </div>
  )
}

export default Home