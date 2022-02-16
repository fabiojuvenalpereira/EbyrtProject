import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import TaskList from './Pages/TaskList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path='/tasks' element={ <TaskList /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;