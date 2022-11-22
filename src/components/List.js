import React from 'react';

function List() {
   return (
      <div className="mt-10 flex ">
         <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <button className="bg-gray-300 p-4 mr-1  hover:bg-gray-400 rounded">
               edit
            </button>
            <button className="bg-gray-300 p-4 mr-1 hover:bg-gray-400 rounded">
               erase
            </button>
         </ul>
      </div>
   );
}

export default List;
