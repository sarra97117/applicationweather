import React from 'react'

export default function Header({name="3LIG"}) {
    const styleBizerte={
                backgroundColor:"green",
                color:"white",
                boxShadow:"2px 2px 2px black"
             }
    const styleSousse={
                backgroundColor:"blue",
                color:"white",
                boxShadow:"2px 2px 2px black"
             }
    const weather={ville:"Bizerte ",
                  temperature :"45°C"}
    return(
        <div>
             <h1> ☀️My weather APP</h1>
             <h2 style={{color:"red" }}> 14/10/2025 </h2>
             <h3 style={weather.ville === "Bizerte" ? styleBizerte : styleSousse}> 
                
                {weather.ville} - {weather.temperature}</h3>
            

        </div>
    )
}