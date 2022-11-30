import React, { useState } from 'react';

import Movie from './Movie';

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
      <div className=" rounded-md bottom-0">
         <h2 className=" flex justify-center text-lg text-pink-600 cursor-pointer">
            MOVIE
         </h2>
         <div className="flex justify-center">
            <input
               type="text"
               placeholder="Add movie to watchlist"
               className=" flex border-blue-500 bg-gray-400 p-3 mb-3 border-2 rounded-md"
               value={inputValue}
               onChange={onChange}
            />
         </div>
         {results && results.map((movie) => <Movie movie={movie} />)}
      </div>
   );
}

export default InputMovie;
