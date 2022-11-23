import React, { useState } from 'react';

function Todo(complateTodo, todos) {
   const [edit, setEdit] = useState({
      id: null,
      value: '',
   });

   return todos.map((todo, index) => (
      <div
         className={todo.isComplate ? 'todo-row complate' : 'todo-row'}
         key={index}
      >
         <div key={todo.id} onClick={() => complateTodo(todo.id)}>
            {todo.text}
         </div>
      </div>
   ));
}

export default Todo;
