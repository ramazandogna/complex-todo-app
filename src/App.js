import './App.css';

import React, { useRef, useState } from 'react';

import { useSubmit } from 'react-router-dom';

function App() {
   const [getText, setGetText] = useState('');
   const [items, setItems] = useState([]);

   const ref = useRef(null);

   const handleChange = (e) => {
      setItems(e.target.value);
   };

   const handleClick = () => {
      setItems([...items, getText]);
      setGetText('');
      ref.current.focus();
      console.log(ref.current.value);
   };

   return (
      <>
         <pre className="box">{JSON.stringify(getText)}</pre>
         <div className="">
            <div className="flex justify-center align-middle mt-40">
               <input
                  ref={ref}
                  placeholder="Buraya metin"
                  className=" max-w-xs bg-gray-400 p-3 rounded-md hover:bg-blue-600"
                  onChange={handleChange}
                  value={getText}
               />
               <button
                  className="border-2 border-gray-400 hover:border-blue-500 p-3 rounded-md ml-1"
                  onClick={handleClick}
               >
                  Click Me
               </button>
            </div>
            <div className="bg-red-200 justify-center align-middle">
               <ul>
                  {items.map((item, key) => (
                     <li key={key}>{item}</li>
                  ))}
               </ul>
            </div>
         </div>
      </>
   );
}
export default App;
