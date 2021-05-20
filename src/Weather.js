import React, {useState} from "react";
import axios from "axios";
import "./Weather.css"
import Forecast from "./Forecast"
import WeatherInfo from "./WeatherInfo";
import Loader from "react-loader-spinner";



export default function Weather (props){
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState (props.defaultCity);
  
  function handleResponse(response){
  setWeatherData({
  ready: true,
  temperature: Math.round(response.data.main.temp),
  wind: Math.round(response.data.wind.speed),
  humidity: response.data.main.humidity,
  city: response.data.name,
  description: response.data.weather[0].description,
  date: new Date(response.data.dt*1000),
  iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`, 
  icon: response.data.weather[0].icon,
});
  }
function search (){
  const apiKey= "d38b3fbab5d2bec8684d5a27e2c576ad";
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}

  function handleSubmit(event){
    event.preventDefault();
    search();
    }

    function handleCityChange (event){
      setCity (event.target.value);
}

  if (weatherData.ready) {
    return (
      <div className ="Weather"> 
      <form onSubmit={handleSubmit}>
          <div className = "row">
              <div className = "col-9">
          <input
          type = "search"
          placeholder ="Enter a city..."
          className = "form-control" 
          autoFocus ="on"
          onChange = {handleCityChange}
          />
          </div>
         <div className ="col-3">
          <input type="submit" value ="Search"  className="btn btn-primary w-100"/>
          </div>
          </div>
          </form>   
          <WeatherInfo data = {weatherData} />      
          <Forecast />
   </div>
  );
} else {
search ();
  return (
  <Loader
    type="ThreeDots"
    color="purple"
    height={100}
    width={100}
  />);
}
  
  }