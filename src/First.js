import React,{useState,useEffect} from 'react';
import { fakeFetch } from './Constants/FirstConst';

function First() {
    const[temperature,setTemperature] = useState([]);
    const[symbol,setSymbol] = useState('C');
   

useEffect(()=>{
    fetchData();
},[])

const fetchData = async()=>{
    try
   { const response= await fakeFetch("https://example.com/api/weather");
    const{data} = response
    setTemperature(data);
}catch(err){
console.log("Error while fetching data"+ err);
}
}

const convertTemp= () =>{
    setTemperature(prevTemp =>({...prevTemp , temperature:   (prevTemp.temperature * 9/5) + 32}));
    setSymbol("F");
    
}

  return temperature && (
    <div>
        <div>
        { temperature.temperature} &deg;{symbol}
        </div>
        <div>{temperature.humidity} %</div>
        <div>{temperature.windSpeed} km/h</div>
        <button onClick={convertTemp} >Switch to Fahrenheit</button>
        </div>
  )
}

export default First