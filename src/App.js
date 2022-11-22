import './App.css';

import React, { useState } from 'react';

function App() {
   const [getText, setGetText] = useState('');

   const handleText = (event) => {
      setGetText(event.target.value);

      console.log(event.target.value);
   };

   const handleClickText = () => {
      alert(getText);
   };

   return (
      <>
         <pre>{JSON.stringify(getText)}</pre>
         <div className="flex justify-center align-middle mt-40 ">
            RR
            <input type="text" className="bg-gray-400" onChange={handleText} />
            <button onClick={handleClickText}>Click Me</button>
            <ul>
               <li>{}</li>
            </ul>
         </div>
      </>
   );
}

export default App;
