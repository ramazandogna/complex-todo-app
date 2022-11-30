import React, { useState } from 'react';

export const Movie = ({ movie }) => {
   // const [content, setContent] = useState(movie.content);

   return (
      <div className=" max-h-screen">
         <ul>
            <li className="border-2 border-blue-300">
               <h4 className="">{movie.title}</h4>
               <h4 className=" bg-red-300">
                  {movie.release_date
                     ? movie.release_date.substring(0, 4)
                     : 'none'}
               </h4>
            </li>
         </ul>
      </div>
   );
};

export default Movie;
