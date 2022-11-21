import './App.css';

import React, { useState } from 'react';

function App() {
   return (
      <div className="flex justify-center align-middle mt-40 ">
         <div className="justify-center  items-center m-15 inline-block align-middle bg-gray-200 p-20 ">
            <div className="havetodos mb-5">You have X todos today</div>
            <div className="flex border bg-gray-300 hover:bg-gray-200 hover:border-black h-12 ">
               <input
                  className="flex border bg-gray-300 hover:bg-gray-200 hover:border-black"
                  type="text"
                  placeholder="Add new todos"
               />
               <button className="bg-red-500 border border-black text-2xl hover:bg-transparent rounded p-3">
                  +
               </button>
            </div>
            <div className="mt-10 flex ">
               <ul className="">
                  <li>1</li>
                  <button className="bg-gray-300 p-4 mr-1  hover:bg-gray-400 rounded">
                     edit
                  </button>
                  <button className="bg-gray-300 p-4 mr-1 hover:bg-gray-400 rounded">
                     erase
                  </button>
               </ul>
            </div>
         </div>
      </div>
   );
}

export default App;
