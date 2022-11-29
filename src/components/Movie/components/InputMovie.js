import React from 'react';
import Watchlist from './Watchlist';

function InputMovie() {
   return (
      <div className="w-1/3 fixed rounded-md bottom-0 border-gray-700 border-l-2">
         <Watchlist />
         <h2 className="justify-center text-lg text-pink-600 cursor-pointer">
            MOVIE
         </h2>
         <input
            type="text"
            placeholder="Add movie to watchlist"
            className=" border-blue-500 bg-gray-400 p-3 border-2 rounded-md"
         />
      </div>
   );
}

export default InputMovie;
