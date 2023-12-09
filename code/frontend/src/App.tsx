import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

import TaskList  from './components/TaskList';

const App = () => {
  return (
    <div className="App">
      <TaskList />
    </div>
  );
}

export default App;
