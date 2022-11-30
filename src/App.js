import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';

import InputMovie from './components/Movie/components/InputMovie';
import Movie from './components/Movie/components/Movie';
import Todo from './components/Todo/Todo';
import TodoList from './components/Todo/TodoList';
import Weather from './components/Weather/Weather';

function App() {
   return (
      <div>
         <Weather />
         <InputMovie />
         <TodoList />
      </div>
   );
}
export default App;
