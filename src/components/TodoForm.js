import React, { useState } from 'react';

function TodoForm(props, todos) {
   const [input, setInput] = useState('');

   const handleChange = (e) => {
      setInput(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      props.onSubmit({
         id: Math.floor(Math.random() * 1000),
         text: input,
      });
      setInput('');
   };

   return (
      <div>
         <>
            <pre className="box">{JSON.stringify(input)}</pre>
            <div className="">
               <div className="flex justify-center align-middle mt-40">
                  <form onSubmit={handleSubmit}>
                     <input
                        placeholder="Add TODOS 📋"
                        className=" max-w-xs bg-gray-400 p-3 rounded-md hover:bg-blue-600"
                        onChange={handleChange}
                        value={input}
                        onSubmit={handleSubmit}
                        name="text"
                     />
                     <button
                        className="border-2 border-gray-400 hover:border-blue-500 p-3 rounded-md ml-1"
                        onClick={handleSubmit}
                     >
                        Click Me
                     </button>
                  </form>
               </div>
               <div className="bg-red-200 justify-center align-middle">
                  {/* <ul>
             {items.map((item, key) => (
                <li key={key}>{item}</li>
             ))}
          </ul> */}
               </div>
            </div>
         </>
      </div>
   );
}

export default TodoForm;
