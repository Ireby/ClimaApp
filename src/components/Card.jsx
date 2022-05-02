import React from 'react';
import CardTemp from './CardTemp';
export default function Card({max,min,name,img,onClose}) {
//`http://openweathermap.org/img/wn/${img}@2x.png` icon
//veo una card, un botón, un title label & value x2 and img  
function handleOnClose(){
 if(typeof onClose === 'function'){onClose()}}
//evita que haga algo si me equivoco al enviar un tipo de dato
//creo el cuerpo del html
return (<div> 
  <button onClick={handleOnClose}>x</button>
  <span>{name}</span>
  <CardTemp label='Min' value={min}/>
  <CardTemp label='Max' value={max}/>
  <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="clima icon"/>
  </div>)
};







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