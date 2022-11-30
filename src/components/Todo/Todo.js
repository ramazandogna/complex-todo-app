import React, { useState } from 'react';

import clsx from 'clsx';
import { useTodoLayerValue } from '../../context/todoContext';

function Todo({ todo }) {
   const [{}, dispatch] = useTodoLayerValue();
   const [editable, setEditable] = useState(false);
   const [content, setContent] = useState(todo.content);

   const removoTodo = (todoId) => {
      dispatch({
         type: 'REMOVE_TODO',
         payload: todoId,
      });
   };
   const completeTodo = (todoId) => {
      dispatch({
         type: 'COMPLETE_TODO',
         payload: todoId,
      });
   };
   const uptadeTodo = ({ todoId, newValue }) => {
      dispatch({
         type: 'UPTADE_TODO',
         payload: {
            todoId,
            newValue,
         },
      });
   };

   const todoStyle = clsx({
      ['todo-row']: true,
      ['completed']: todo.isCompleted,
   });

   return (
      <div className={todoStyle}>
         <div
            onClick={() => (editable ? '' : completeTodo(todo.id))}
            className="max-h-30 mt-1 relative max-w-full bg-gray-300 pl-4 p-1  mr-5 ml-5"
         >
            {editable ? (
               <input
                  className="bg-gray-400 p-3 border-2 rounded-md"
                  type="text"
                  value={content}
                  onChange={(event) => setContent(event.target.value)}
               />
            ) : (
               todo.content
            )}
            <div className=" absolute top-0 mr-1 right-0">
               {editable ? (
                  <button
                     onClick={() => {
                        uptadeTodo({
                           todoId: todo.id,
                           newValue: content,
                        });

                        setContent('');
                        setEditable(false);
                     }}
                     className=" ml-1 bg-transparent hover:bg-blue-300 text-blue-700 font-semibold hover:text-white py-1 px-2 hover:border-transparent rounded"
                  >
                     Edit
                  </button>
               ) : (
                  <button
                     onClick={() => {
                        setEditable(true);
                     }}
                     className=" ml-1 bg-transparent hover:bg-blue-300 text-blue-700 font-semibold hover:text-white py-1 px-2 hover:border-transparent rounded"
                  >
                     Edit
                  </button>
               )}
               <button
                  onClick={() => removoTodo(todo.id)}
                  className=" ml-1 bg-transparent hover:bg-blue-300 text-blue-700 font-semibold hover:text-white py-1 px-2 hover:border-transparent rounded"
               >
                  Delete
               </button>
            </div>
         </div>
      </div>
   );
}

export default Todo;
