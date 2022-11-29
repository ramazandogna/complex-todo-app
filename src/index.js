import reducer, { initialState } from './context/reducer';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { TodoLayer } from './context/todoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <TodoLayer initialState={initialState} reducer={reducer}>
      <React.StrictMode>
         <App />
      </React.StrictMode>
   </TodoLayer>
);
