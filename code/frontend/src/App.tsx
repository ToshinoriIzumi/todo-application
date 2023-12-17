import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import TaskList  from './components/TaskList';
import TaskAdd from './components/TaskAdd';
import TaskDetail from './components/TaskDetail';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/taskadd" element={<TaskAdd />} />
        <Route path="/task/:id" element={<TaskDetail />} />
      </Routes>
    </div>
  );
}

export default App;
