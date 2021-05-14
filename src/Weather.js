import React from 'react'
import axios from 'axios';
import './Weather.css'
export default function Weather (){
  function showTemperature(response){
    console.log(response.data);
  let city ="Barrie"
  const apiKey= "d38b3fbab5d2bec8684d5a27e2c576ad";
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios(apiUrl).get(showTemperature);
}  
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
     <h1>Barrie, ON, Canada</h1>
     <ul>
     <li>Monday 6:00 PM</li>
     <li>Sunny</li>
     </ul>     
       <div className="row mt-3"> 
       <div className="col-6">
         <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Sunny"/>
        <span className="temperature"><strong> 26 </strong></span><span className ="units">℃ | ℉ </span>
         </div>
       <div className="col-6">
         <ul>
           <li>Precipitation: 33%</li>
           <li>Humidity: 79%</li>
           <li>Wind: 7 km/h</li>
           </ul>
           </div>
       
        
       </div>
      </div>
      
    );

  }