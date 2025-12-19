import React from'react'
import "../styles/card.css"
export default function WeatherCart  ({city , temperature , icon}) {
return(
    <div className='weather-card'>
        <h3> {city}</h3>
        <p>{temperature} </p>
        <img src={icon} alt="ceciest une icone"/>
    </div>

)
}