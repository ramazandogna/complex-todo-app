import './App.css';

import React, { useState } from 'react';

import { useSubmit } from 'react-router-dom';

function App() {
   const [getText, setGetText] = useState('');

   
    
   
   const dataHandler = 
      [...this.state.dataHandler]
      todos.push(this.getText.value);
      this.setState({dataHandler})
      }
   ;

   const handleText = (event) => {
      setGetText(event.target.value);

      console.log(event.target.value);
   };

   const handleClickText = () => {
      alert(getText);
   };

   const listItems = dataHandler.map((handleText) => (
      <listItems value={handleText} />
   ));

   return (
      <>
         <pre>{JSON.stringify(getText)}</pre>
         <div className="flex justify-center align-middle mt-40 ">
            RR
            <input type="text" className="bg-gray-400" onChange={handleText} />
            <button onClick={handleClickText}>Click Me</button>
            <ul>
               {dataHandler.map((data, key) => {
                  <li key={key}>{getText}</li>;
               })}
            </ul>
         </div>
      </>
   );
}

export default App;
