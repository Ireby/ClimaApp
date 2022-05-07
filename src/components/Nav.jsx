import React from "react";
import Logo from "../logo.png";
import SearchBar from "./SearchBar.jsx";
import  "./Nav.css";
import { Link } from 'react-router-dom';

export default function Nav({ onSearch }) {
  return (
    <nav class='ns'>
    <Link to="/" ><img src={Logo} alt="logo" width={40} /></Link>
    <Link  to="/">
         <p>El clima</p>
   </Link>
    <Link  active to="/about">Info</Link>

     <SearchBar onSearch={onSearch} />
      </nav>
  );
}


