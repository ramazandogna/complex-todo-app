import React, { useState } from 'react';

import Todo from './Todo';
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

   const completeTodo = (id) => {
      let updatedTodos = todos.map((todo) => {
         if (todo.id === id) {
            todo.isComplate = !todo.isComplate;
         }
         return todo;
      });
      setTodos(updatedTodos);
   };

   return (
      <div>
         <TodoForm onSubmit={addTodo} todos completeTodo />
         <Todo completeTodo={completeTodo} todos={todos} />
      </div>
   );
}

export default TodoList;
