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
   const uptadeTodo = (todoId, newValue) => {
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
            className="mt-1 flex relative max-w-full bg-blue-500 border-2 border-black pl-4 p-1 rounded mr-5  ml-5"
         >
            {editable ? (
               <input
                  type="text"
                  value={content}
                  onChange={(event) => setContent(event.target.value)}
               />
            ) : (
               todo.content
            )}

            <div className="relative right float-right">
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
                     className="bg-red-400 hover:bg-red-500 rounded-md p-1 ml-1 active:bg-600"
                  >
                     Edit
                  </button>
               ) : (
                  <button
                     onClick={() => {
                        setEditable(true);
                     }}
                     className="bg-red-400 hover:bg-red-500 rounded-md p-1 ml-1 active:bg-600"
                  >
                     Edit
                  </button>
               )}
               <button
                  onClick={() => removoTodo(todo.id)}
                  className="bg-red-400 hover:bg-red-500 rounded-md p-1 ml-1 active:bg-600"
               >
                  Remove
               </button>
            </div>
         </div>
      </div>
   );
}

export default Todo;
