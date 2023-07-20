import React, { useState, useEffect } from 'react';
import { fakeFetch } from './Constants/FirstConst';

const First = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual API key and 'YOUR_CITY_NAME' with the desired city
   
     fetchData();
  }, []);
 
  const fetchData =async()=>{
    try{
        const response = await fakeFetch(`https://example.com/api/weather`);
        const{data} = response
        setWeatherData(data);
    }catch(error){
        console.log("Error while fetchin data" + error);
    }
  }

  const toggleTemperatureUnit = () => {
    setIsCelsius(prevState => !prevState);
  };

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const temperatureInCelsius = weatherData.temperature;
  const temperatureInFahrenheit = (temperatureInCelsius * 9) / 5 + 32;

  return (
    <div>
      <h1>Weather Information</h1>
      <p>Current Temperature: {isCelsius ? temperatureInCelsius.toFixed(2) : temperatureInFahrenheit.toFixed(2)} {isCelsius ? '°C' : '°F'}</p>
      <p>Humidity: {weatherData.humidity}%</p>
      <p>Wind Speed: {weatherData.windSpeed} Km/h</p>
      <button onClick={toggleTemperatureUnit}>Toggle Temperature Unit</button>
    </div>
  );
};

export default First;
