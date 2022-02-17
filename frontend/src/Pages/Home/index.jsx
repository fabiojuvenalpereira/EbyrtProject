import React from 'react'
import ImputText from '../../components/InputText';

function Home() {
  return (
    <div className="main-home">
      <div className="main-header"></div>
      <div className="main-content">
        <div className="title-page">
          <p>TO DO LIST</p>
        </div>
        <div className="input-text">
          <ImputText />
        </div>
      </div>
    </div>
  )
}

export default Home