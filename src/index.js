import reducer, { initialState } from './context/reducer';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { TodoLayer } from './context/todoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <TodoLayer initialState={initialState} reducer={reducer}>
         <App />
      </TodoLayer>
   </React.StrictMode>
);
