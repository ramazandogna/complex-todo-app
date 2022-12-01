import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';

import InputMovie from './components/Movie/components/InputMovie';
import MainPage from './components/MainPage';
import Menu from './components/Menu';
import TodoList from './components/Todo/TodoList';
import Weather from './components/Weather/Weather';

function App() {
   return (
      <div>
         <BrowserRouter>
            <Menu />
            <Routes>
               <Route path="/" element={<MainPage />}></Route>
               <Route path="/movie" element={<InputMovie />}></Route>
               <Route path="/weather" element={<Weather />}></Route>
               <Route path="/todo" element={<TodoList />}></Route>
            </Routes>
         </BrowserRouter>
      </div>
   );
}
export default App;
