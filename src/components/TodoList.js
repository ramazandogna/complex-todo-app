import React, { useState } from 'react';

import Todo from './Todo';
import TodoForm from './TodoForm';
import { useTodoLayerValue } from './../context/todoContext';

function TodoList(todo) {
   const [{ todos }, setTodos] = useTodoLayerValue();

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
         <div>
            {todos.map((todo) => (
               <Todo todos={todo} key={todo.id} />
            ))}
         </div>
         <div>{todo.input}</div>
         <TodoForm onSubmit={addTodo} todos completeTodo />
      </div>
   );
}

export default TodoList;
