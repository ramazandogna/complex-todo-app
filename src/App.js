import './App.css';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';

import Header from './components/Header';
import Today from './components/Today';
import Tomorrow from './components/Tomorrow';
import Yesterday from './components/Yesterday';

function App() {
   return (
      <div className="center">
         <BrowserRouter>
            <Header />
            <Routes>
               <Route path="/" element={<Today />}></Route>
               <Route path="/yesterday" element={<Yesterday />}></Route>
               <Route path="/tomorrow" element={<Tomorrow />}></Route>
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
