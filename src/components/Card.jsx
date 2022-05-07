import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ min, max, name, img, onClose, id }) {
  return (
    <Link to={`/ciudad/${id}`}><div className="card">
   
        <button onClick={onClose} className="Button">X</button>
   
      <div className='scard'>
        
          <h5 className="card-title">{name}</h5>
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Min</p>
            <p>{min}°C</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Max</p>
            <p>{max}°C</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <img alt="icon" src={`http://openweathermap.org/img/wn/${img}@2x.png`}/>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}



/*export default function Card({name, min, max, img, onClose}) {
  // acá va tu código
  return <div>

    <div>
      <h2>{name}</h2>
      <button onClick={onClose}>X</button>
    </div>

    <div>
      <div>
        <h3>Min</h3>
        <b>{min}</b>
        </div>
      <div>
        <h3>Max</h3>
        <b>{max}</b>
        </div>
      <img src= {`http://openweathermap.org/img/wn/${img}@2x.png`} alt='imagen del clima' />
    </div> */