import React, { useState } from 'react';

import Watchlist from './Watchlist';
import axios from 'axios';

function InputMovie() {
   const [inputValue, setInputValue] = useState('');
   const [results, setResults] = useState([]);

   const REACT_APP_TMDB_KEY = 'bc8cd9e23622fc1c8cef4ffea19844ec';

   const onChange = (e) => {
      e.preventDefault();

      setInputValue(e.target.value);

      fetch(
         `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
      )
         .then((res) => res.json())
         .then((data) => {
            console.log(data.results);
            if (!data.errors) {
               setResults(data.results);
            } else {
               setResults([]);
               console.log(setResults);
            }
         });
   };

   return (
      <div className="w-1/3 fixed rounded-md bottom-0 border-gray-700 border-l-2">
         <Watchlist />
         <h2 className="justify-center text-lg text-pink-600 cursor-pointer">
            MOVIE
         </h2>
         <input
            type="text"
            placeholder="Add movie to watchlist"
            className=" border-blue-500 bg-gray-400 p-3 mb-16 border-2 rounded-md"
            value={inputValue}
            onChange={onChange}
         />
         {results.length > 0 && (
            <ul>
               {results.map((movie) => {
                  <li key={movie.id}>
                     <div>Movie Title:{movie.title}</div>
                  </li>;
                  <li key={movie.id}>{movie.release_date.substring(0, 4)}</li>;
               })}
            </ul>
         )}
      </div>
   );
}

export default InputMovie;
