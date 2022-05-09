import React from "react";
import "./About.css"
import yo from "./imgy.png";
import icln from "./link.png";
import git from "./github.png";
import hen from "../logoHenry.png";
import { ExternalLink } from 'react-external-link';
import { Link } from 'react-router-dom';
import tw from "./twitter.png";
export default function About(){
    

    return (
        <div className="sob">
           <div className="texto">
               <div className="fond">
               <p>🌏</p>
               <p>  ¡Bienvenido al APP del clima  !</p>
               El clásico en el mundo del pronóstico meteorológico
               
               <p>🌤</p>
             
               </div>
               
                    <p>Un poco más de información:</p>  
                -
            <p>Lo primero que verás cuando busques una ciudad será la temperatura mínima y la máxima actual 
                .Luego si haces click en su nombre podrás encontrar mayores detalles sobre el clima la misma<br/>
               
              
                </p>  
          
           </div>
          
           <div>
               <img   src={yo} width={100} height={100} alt="R.U" /> 
           </div>
           <p>
             ❄Rebeca Urra
           </p>
           <div>
        
           
             <div className="d">
             <p>Contáctame en: </p>
            <ExternalLink href="https://www.linkedin.com/in/rebeca-urra-8225a1187/"><img  className="img" alt="LnIcon"  src={icln}/></ExternalLink>
            <ExternalLink href=" https://twitter.com/urra_rebeca/"><img  className="img" alt="Icon"  src={tw}/></ExternalLink>
           
            <ExternalLink href="https://www.instagram.com/accounts/login/?next=/rebecaurra/"><img  className="img" src='https://cdn.iconscout.com/icon/free/png-256/instagram-216-721958.png' alt='Githubicon' /></ExternalLink>
            <ExternalLink href="https://github.com/Ireby"><img  className="img" src={git} alt='Githubicon' /></ExternalLink>
             </div>
          
            
           </div>
           <div className="d2">
            
            <p>  Made in: bootcamp <img src={hen} width={15} alt="Icon"/>enry💛</p> 
          
             </div>
        </div>
    )
}
