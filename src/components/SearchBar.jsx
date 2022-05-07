import React, { useState } from "react";
import "./SearchBar.css"

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState('')
  return (
    <form  onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input className="busqueda" type="search" placeholder="✈Buscar..." aria-label="Search" value={city} onChange={e => setCity(e.target.value)}/>
      <button className="btn" type="submit">❄</button>
    </form>
  );
}
