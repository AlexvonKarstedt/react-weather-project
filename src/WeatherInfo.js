import React from 'react';
import FormattedDate from './FormattedDate';



export default function WeatherInfo (props){
   return (
       <div className ="WeatherInfo">
    <h1>{props.data.city}</h1>
   <ul>
   <li><FormattedDate date={props.data.date}/></li>
   <li className="text-capitalize">{props.data.description}</li>
   </ul>     
     <div className="row mt-3"> 
     <div className="col-6">
       <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Sunny"/>
      <span className="temperature"><strong> {props.data.temperature} </strong></span><span className ="units">℃ | ℉ </span>
       </div>
     <div className="col-6">
       <ul>
         <li>Precipitation: {props.data.precipitation}%</li>
         <li>Humidity: {props.data.humidity}%</li>
         <li>Wind: {props.data.wind} km/h</li>
         </ul>
         </div>
     </div>
     </div>
   );
}