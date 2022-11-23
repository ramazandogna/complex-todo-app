import React, { useState } from 'react';

import TodoForm from './TodoForm';

function TodoList(todo) {
   const [todos, setTodos] = useState([]);

   const addTodo = (todo) => {
      if (!todo.text) {
         return;
      }

      const newTodos = [todo, ...todos];

      setTodos(newTodos);
      console.log(todo, ...todos);
   };

   return (
      <div>
         <h1>What's the Plan for Today?</h1>
         <TodoForm onSubmit={addTodo} todos />
      </div>
   );
}

export default TodoList;
