import React from 'react';
import Card from './Card';
import styles from './Cards.module.css';
export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  return (<div className={styles.cards}>
     {cities.map((citi) =>( <Card  
                key={citi.id}
                min={citi.main.temp_min} 
                max={citi.main.temp_max} 
                name={citi.name} 
                img={citi.weather[0].icon} 
                onClose={() => alert(citi.name)} />))};
    </div>)
};

