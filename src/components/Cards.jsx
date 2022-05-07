import React from 'react';
import  './Cards.css';

import Card from './Card.jsx';
import { Link } from "react-router-dom";
export default function Cards({cities, onClose,id}) {
  if(cities){
    return (
      <div className="cards">
        {cities.map(c => <Card
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
          
          /> )}
          <Link  to="/">
                 <img width={50} position="absolute "  src="https://upload.wikimedia.org/wikipedia/commons/2/27/1328101938_Arrow-Right.png"/>
               </Link>
      </div>
    );
  }
}
