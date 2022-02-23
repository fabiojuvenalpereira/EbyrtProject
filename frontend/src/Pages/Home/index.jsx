import React from 'react'
import Footer from '../../components/Footer';
import UserNameInput from './UserNameInput';

import './Home.css';

function Home() {
  return (
    <div className="main-home">
      <div className="main-content">
        <div className="title-page ">
          <p className='main-title magictime puffIn'>TO DO LIST</p>
          <UserNameInput />
        </div>
      </div>
        <Footer />
    </div>
  );
}

export default Home;