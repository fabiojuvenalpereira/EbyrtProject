import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function Header() {
  const [userName, setUserName ] = useState('');
  
  useEffect(() => {
    const foundUsername = JSON.parse(localStorage.getItem('userName'));
    setUserName(foundUsername)
  }, [])  

  return (
    <div>
      <div>Header</div>
      <div>{userName}</div>
    </div>
  )
}

export default Header