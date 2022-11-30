import React, { useEffect, useState } from 'react';

import Todo from './Todo';
import { useTodoLayerValue } from '../../context/todoContext';

function TodoList(todo) {
   const [content, setContent] = useState('');
   const [{ todos }, dispatch] = useTodoLayerValue();

   const buttonEnable = content.length > 1;

   const handleChange = (e) => {
      setContent(e.target.value);
   };
   const handleSubmit = (e) => {
      e.preventDefault();
      if (!content) return;

      const newTodo = {
         id: Math.floor(Math.random() * 10000),
         content,
         isComplated: false,
      };
      dispatch({
         type: 'ADD_TODO',
         payload: newTodo,
      });
      setContent(' ');
      console.log(todos);
   };

   return (
      <div className="w-2/3 float-right fixed rounded-md right-0 top-0">
         <h2 className=" justify-center flex text-lg text-pink-600 cursor-pointer">
            TODO LIST
         </h2>
         <div className=" align-middle p-4">
            <div className="flex justify-center align-middle">
               <form onSubmit={handleSubmit}>
                  <input
                     placeholder="Add TODOS 📋"
                     className=" border-blue-500 bg-gray-400 p-3 border-2 rounded-md"
                     onChange={handleChange}
                     value={content}
                     onSubmit={handleSubmit}
                     type="text"
                  />
                  <button
                     className="border-2 border-gray-400 hover:border-blue-500 p-3 rounded-md ml-1"
                     onClick={handleSubmit}
                     disabled={!buttonEnable}
                  >
                     Click Me
                  </button>
               </form>
            </div>
            <div>
               {todos &&
                  todos.map((todo) => <Todo todo={todo} key={todo.id} />)}
            </div>
         </div>
      </div>
   );
}

export default TodoList;
