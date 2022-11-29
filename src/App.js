import './App.css';

import React, { useState } from 'react';

import InputMovie from './components/Movie/components/InputMovie';
import TodoList from './components/Todo/TodoList';
import Weather from './components/Weather/Weather';

function App() {
   return (
      <div>
         <Weather />
         <TodoList />
         <InputMovie />
      </div>
   );
}
export default App;
