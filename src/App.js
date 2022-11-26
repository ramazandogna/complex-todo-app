import './App.css';

import React, { useEffect, useRef, useState } from 'react';

import TodoList from './components/Todo/TodoList';
import Weather from './components/Weather/Weather';

function App() {
   return (
      <div>
         <div>
            <Weather />
         </div>
         <TodoList />
      </div>
   );
}
export default App;
