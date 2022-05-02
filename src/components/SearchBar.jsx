import React from 'react';

export default function SearchBar({onSearch}) {
  // lo que va a renderizar
  function handleOnSearch(){
    if(typeof onSearch === 'function'){//si esto es una funcion entonces
      const input = document.getElementById('search-bar-input');
      //obtengo el valor de este elemento y se lo paso a la function
      onSearch(input.value);//pasandole el valor
    }
  }
  return (<div>
    <input></input>
    <button onClick={handleOnSearch} >Agregar</button>
  </div>)
};