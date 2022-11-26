import React, { useState } from 'react';

import { useTodoLayerValue } from '../../context/todoContext';

function Todo({ todo }) {
   return (
      <div className="">
         <div className=" mt-1 flex relative max-w-full bg-blue-500 border-2 border-black pl-4 p-1 rounded mr-5  ml-5">
            {todo.content}
            <div className=" absolute right float-right">
               <button className="bg-red-400 hover:bg-red-500 rounded-md p-1 ml-1 active:bg-600">
                  Edit
               </button>
               <button className="bg-red-400 hover:bg-red-500 rounded-md p-1 ml-1 active:bg-600">
                  Erase
               </button>
            </div>
         </div>
      </div>
   );
}

export default Todo;
