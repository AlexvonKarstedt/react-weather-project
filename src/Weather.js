import React, {useState} from 'react'
import axios from 'axios';
import './Weather.css'

export default function Weather (){
  const [weatherData, setWeatherData] = useState({ready: false});
  function handleResponse(response){
    console.log(response.data);
setWeatherData({
  ready: true,
  temperature: Math.round(response.data.main.temp),
  wind: Math.round(response.data.wind.speed),
  humidity: response.data.main.humidity,
  city: response.data.name,
  description: response.data.weather[0].description,
  date: response.data.main.dt,
});
  }
  if (weatherData.ready) {
    return (
      <div className ="Weather"> 
      <form>
          <div className = "row">
              <div className = "col-9">
          <input
          type = "search"
          placeholder ="Enter a city..."
          className = "form-control" 
          autoFocus ="on"
          />
          </div>
          <div className ="col-3">
          <input type="submit" value ="Search"  className="btn btn-primary w-100"/>
          </div>
          </div>
          </form>      
   <h1>{weatherData.city}</h1>
   <ul>
   <li>{weatherData.date}</li>
   <li className="text-capitalize">{weatherData.description}</li>
   </ul>     
     <div className="row mt-3"> 
     <div className="col-6">
       <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Sunny"/>
      <span className="temperature"><strong> {weatherData.temperature} </strong></span><span className ="units">℃ | ℉ </span>
       </div>
     <div className="col-6">
       <ul>
         <li>Precipitation: {weatherData.precipitation}%</li>
         <li>Humidity: {weatherData.humidity}%</li>
         <li>Wind: {weatherData.wind} km/h</li>
         </ul>
         </div>
     </div>
    </div>
    
  );

  } else {const apiKey= "d38b3fbab5d2bec8684d5a27e2c576ad";
  let city ="Barrie"
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading..."
}
  
  
function handleSubmit(event){
event.preventDefault();
}
  
  }