import React from 'react';

function input(setData, data) {
   const handleinput = (e) => {
      setData({
         ...data,
         [e.target.name]: e.target.value,
      });
   };

   return (
      <div>
         <div className="justify-center  items-center m-15 inline-block align-middle bg-gray-200 p-20 ">
            <div className="havetodos mb-5 p-4 bg-gray-300">
               You have X todos today
            </div>
            <div className="flex border bg-gray-300 hover:bg-gray-200 hover:border-black h-12 ">
               <input
                  className="flex border bg-gray-300 hover:bg-gray-200 hover:border-black"
                  type="text"
                  name="data"
                  placeholder="Add new todos"
                  onChange={(e) => setData(e.target.value)}
                  value={data}
               />
               <button
                  onClick={handleinput}
                  className="bg-red-500 border border-black text-2xl hover:bg-transparent rounded p-3"
               >
                  +
               </button>
            </div>
            <div className="mt-10 flex ">
               <ul className="">
                  <li>123</li>
                  <li>123</li>
                  <li>123</li>
                  <li>123</li>
                  <li>123</li>
                  <button className="bg-gray-300 p-4 mr-1  hover:bg-gray-400 rounded">
                     edit
                  </button>
                  <button className="bg-gray-300 p-4 mr-1 hover:bg-gray-400 rounded">
                     erase
                  </button>
               </ul>
            </div>
         </div>
      </div>
   );
}

export default input;
