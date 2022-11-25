import React, { useState } from 'react';

import Todo from './Todo';

function TodoForm(props, todos) {
   const [input, setInput] = useState('');

   const handleChange = (e) => {
      setInput(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      props.onSubmit({
         id: Math.floor(Math.random() * 1000),
         text: input,
      });
      setInput('');
   };

   return (
      <div>
         <>
            <pre className=" mt-20 italic border-gray-900 border-2 max-w-m justify-center bg-blue-400 p-4 justify-center flex ">
               {JSON.stringify(input)} 👈🏻 object list
            </pre>
            <div className=" mt-20 align-middle p-4 bg-blue-100 hover:bg-blue-200 ">
               <div className="flex justify-center align-middle mt-40">
                  <form onSubmit={handleSubmit}>
                     <input
                        placeholder="Add TODOS 📋"
                        className=" border-blue-500 max-w-xs bg-gray-400 p-3 border-2 rounded-md hover:bg-blue-600"
                        onChange={handleChange}
                        value={input}
                        onSubmit={handleSubmit}
                        name="text"
                     />
                     <button
                        className="border-2 border-gray-400 hover:border-blue-500 p-3 rounded-md ml-1"
                        onClick={handleSubmit}
                     >
                        Click Me
                     </button>
                  </form>
               </div>
               <div className="">{todos.content}</div>
            </div>
         </>
      </div>
   );
}

export default TodoForm;
