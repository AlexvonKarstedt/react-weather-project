import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function Forecast (){
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className ="WeatherForecast-day">Thu </div> 
                    <WeatherIcon code="10d" size={24}/> 
                    <div className ="WeatherForecast-temps">
                        <span className="WeatherForecast-temp-max">29°
                        </span> 
                        <span className="WeatherForecast-temp-min"> 23° 
                        </span>
                        </div>
                    </div>
            </div>
        </div>
    );
}