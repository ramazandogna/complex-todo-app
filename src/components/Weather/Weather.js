import React, { useEffect, useState } from 'react';

import axios from 'axios';

function Weather() {
   const [description, setDescription] = useState(null);
   const [icon, setIcon] = useState(null);
   const [degrees, setDegrees] = useState(null);

   const API_KEY = 'aa29646da73be5e791434efae0db9a84';

   const fetchData = async (e) => {
      //   e.preventDefault();

      try {
         const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=istanbul&appid=${API_KEY}&units=metric`
         );

         const data = await res.data;

         setDescription(data.weather[0].description);
         setIcon(data.weather[0].icon);
         setDegrees(data.main.temp);
      } catch {
         alert('U couldnt something true..');
      }
   };

   useEffect(() => {
      fetchData();
   }, []);

   return (
      <div className=" fixed left-0 top-0 rounded-md border-gray-700  w-1/3 m-0 p-0 border-r-2">
         <h2 className=" justify-center flex text-lg text-pink-600 cursor-pointer">
            WEATHER
         </h2>
         <div className="hover:bg-orange-400 bg-orange-300">
            İstanbul: {degrees}°C{' '}
            <div className="flex p-3">
               {description}
               <img
                  className=""
                  src={`http://openweathermap.org/img/w/${icon}.png`}
               />
            </div>
         </div>
      </div>
   );
}

export default Weather;
