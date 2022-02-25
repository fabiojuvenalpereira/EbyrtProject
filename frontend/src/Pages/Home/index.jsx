import React from 'react'
import Footer from '../../components/Footer';
import UserNameInput from './UserNameInput';

import logo from '../../images/logo.png'

import './Home.css';

function Home() {
  return (
    <div className="main-home">
      <div className="main-content">
        <div className="title-page ">
          <p className='main-title magictime puffIn'><img src={logo} alt="logo" /></p>
          <UserNameInput />
        </div>
      </div>
        <Footer />
    </div>
  );
}

export default Home;