import './App.css';

import React, { useState } from 'react';

import Input from './components/Input.js';
import List from './components/List';

function App() {
   const [data, setData] = useState('');

   return (
      <div className="flex justify-center align-middle mt-40 ">
         <Input setData={setData} data={data} />
      </div>
   );
}

export default App;
