import React from 'react'
import './Weather.css'
export default function Weather (){
    return (
        <div className ="Weather">       
     <h1>Barrie, ON, Canada</h1>
     <ul>
     <li>Monday 6:00 PM</li>
     <li>Sunny</li>
     </ul>     
       <div className="row"> 
       <div className="col-6">
         <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Sunny"/>
         26℃ | ℉
         </div>
       <div className="col-6">
         <ul>
           <li>Precipitation: 33%</li>
           <li>Humidity: 79%</li>
           <li>Wind: 21 km/h</li>
           </ul>
           </div>
       
        
       </div>
      </div>
      
    );
}