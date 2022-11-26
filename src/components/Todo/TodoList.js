import React, { useState } from 'react';

import Todo from './Todo';
import { useTodoLayerValue } from '../../context/todoContext';

function TodoList(todo) {
   const [content, setContent] = useState('');
   const [{ todos }, dispatch] = useTodoLayerValue();

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
      <div>
         <>
            <pre className=" mt-20 italic border-gray-900 border-2  bg-blue-400 p-4 justify-center flex ">
               {JSON.stringify(content)} 👈🏻 object list
            </pre>
            <div className=" mt-20 align-middle p-4 bg-blue-100 hover:bg-blue-200 ">
               <div className="flex justify-center align-middle">
                  <form onSubmit={handleSubmit}>
                     <input
                        placeholder="Add TODOS 📋"
                        className=" border-blue-500  max-w-xl bg-gray-400 p-3 border-2 rounded-md hover:bg-blue-600"
                        onChange={handleChange}
                        value={content}
                        onSubmit={handleSubmit}
                        type="text"
                     />
                     <button
                        className="border-2 border-gray-400 hover:border-blue-500 p-3 rounded-md ml-1"
                        onClick={handleSubmit}
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
         </>
      </div>
   );
}

export default TodoList;
