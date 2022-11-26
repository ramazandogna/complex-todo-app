import './App.css';

import React, { useEffect, useRef, useState } from 'react';

import TodoList from './components/Todo/TodoList';

function App(todo, props) {
   return (
      <div className="">
         <TodoList />
      </div>
   );
}
export default App;
