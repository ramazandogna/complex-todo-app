import React, { useEffect, useState } from 'react';

import axios from 'axios';

function Weather() {
   const [description, setDescription] = useState(null);
   const [icon, setIcon] = useState(null);
   const [humidity, setHumidity] = useState(null);
   const [wind, setWind] = useState(null);
   const [temp, setTemp] = useState(null);

   const API_KEY = 'aa29646da73be5e791434efae0db9a84';

   const fetchData = async (e) => {
      e.preventDefault();

      const res = await axios.get(
         `https://api.openweathermap.org/data/2.5/weather?q=bilecik&appid=${API_KEY}&units=metric`
      );

      const data = await res.data;
   };

   useEffect(() => {
      fetchData();
   }, []);

   return <div>{data.temp}</div>;
}

export default Weather;
