import React from "react";
import "./Ciudad.css"

export default function Ciudad({city}) {
    return (
      
        <div className="ciudad">
       
                <div className="container">
                    <h2><strong>Detalles:</strong></h2>
                    <strong>🧷</strong>
                    <h5>🏝Ciudad:{city.name}</h5>
                    <div>🏔Pais: {city.sys}</div>
                    <div className="info">
                       
                        <div>🌡Temperatura: {city.temp} ºC</div>
                        <div>🌤Clima: {city.weather}</div>
                        <div>🌬Viento: {city.wind} km/h</div>
                        <div>☁Nuvosidad: {city.clouds}</div>
                        <div>🌫Latitud: {city.latitud}º</div>
                        <div>☄Longitud: {city.longitud}º</div>
                        <div>{city.rain}</div>
                        <div>{city.timezone}</div>
                    </div>
            </div>
        </div>
    )
}