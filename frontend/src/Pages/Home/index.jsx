import React from 'react'
import Footer from '../../components/Footer';
import UserNameInput from './UserNameInput';

import logo from '../../images/logo.png'

import './Home.css';

function Home() {
  return (
    <div className="main-home">
      <div className="logo-page ">
        <p className='main-image'><img src={logo} alt="logo" /></p>
      </div>
      <div className="input-name">
        <UserNameInput />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;