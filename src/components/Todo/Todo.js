import React, { useState } from 'react';

import { useTodoLayerValue } from '../context/todoContext';

function Todo({ todo }) {
   return (
      <div className="mt-1">
         <ul>
            <li className="  pl-4 bg-blue-500 border-2 border-black justify-center p-1 mr-5 mt-1 rounded ml-5">
               {todo.content}
            </li>
         </ul>
      </div>
   );
}

export default Todo;
