import React, { useEffect, useState } from 'react';

import axios from 'axios';

function Weather() {
   const [description, setDescription] = useState(null);
   const [icon, setIcon] = useState(null);
   const [degrees, setDegrees] = useState(null);
   const [userLocation, setUserLocation] = useState(null);
   const [dataFetch, setDataFetch] = useState(false);

   const API_KEY = 'aa29646da73be5e791434efae0db9a84';

   const fetchData = async (e) => {
      e.preventDefault();

      try {
         const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&appid=${API_KEY}&units=metric`
         );

         const data = await res.data;

         setDescription(data.weather[0].description);
         setIcon(data.weather[0].icon);
         setDegrees(data.main.temp);

         setDataFetch(true);
      } catch {
         alert('U must write true location 🫶🏻');
      }
   };

   const defaultFetchData = async (e) => {
      if (!dataFetch) {
         const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=istanbul&appid=${API_KEY}&units=metric`
         );

         const data = await res.data;

         setDescription(data.weather[0].description);
         setIcon(data.weather[0].icon);
         setDegrees(data.main.temp);
      }
   };
   useEffect(() => {
      defaultFetchData();
   }, []);

   return (
      <div className=" fixed bottom-0 right-0 rounded-md border-gray-700  w-1/3 m-0 p-0 border-r-2">
         <h2 className=" justify-center flex text-lg text-pink-600 cursor-pointer">
            WEATHER
         </h2>
         <div className="flex justify-center">
            <input
               placeholder="City Name 🗼"
               className=" border-blue-500 bg-gray-400 h-12 border-2 rounded-md w-2/3"
               submit={fetchData}
               func={fetchData}
               text={(e) => setUserLocation(e.target.value)}
            />
         </div>
         <div className=" mt-2 justify-center flex">
            <div className=" ml-2">İstanbul: {degrees}°C</div>
            <div className="justify-center ml-2">
               {description}
               <div>
                  <img
                     className=" ml-2"
                     src={`http://openweathermap.org/img/w/${icon}.png`}
                  />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Weather;
