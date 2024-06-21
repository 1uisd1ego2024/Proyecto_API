import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Planetas=()=> {

    const [planets,setPlanets] = useState([]);


    useEffect(()=>{
    
        axios.get('https://swapi.dev/api/planets')
        
        .then(response => setPlanets(response.data.results))
        .catch(error => console.error(error));
        
        },[]);
    
    
    return(
      <div className='lista_starwars'>
    
    <ul className='listas'>
    
    {planets.map(planets => (
    
    <li className='listacompleta' key={planets.name}> 
        <p>Name: {planets.name}</p>
        <p>Rotation period: {planets.rotation_period}</p>
        <p>Orbital period: {planets.orbital_period}</p>
        <p>Diameter: {planets.diameter}</p>
        <p>Wheater: {planets.climate}</p>
        <p>Garvity: {planets.gravity}</p>
         </li>
    
    
    ))}
    </ul>
    
    </div>
    );

}

export default Planetas;



