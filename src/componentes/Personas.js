import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Personas=()=> {

    const [people,setPeople] = useState([]);


    useEffect(()=>{
    
        axios.get('https://swapi.dev/api/people')
        
        .then(response => setPeople(response.data.results))
        .catch(error => console.error(error));
        
        },[]);
    
    
    return(
        <div className='lista_starwars'>
    
    <ul className='listas'>
    
    {people.map(people => (
    
    <li className='listacompleta' key={people.name}> 
        <p>Name: {people.name}</p>
        <p>Height: {people.height}</p>
        <p>Weigh: {people.mass}</p>
        <p>Hair color: {people.hair_color}</p>
        <p>Skin Color: {people.skin_color}</p>
        <p>Eye Color: {people.eye_color}</p>
        </li>
    
    
    ))}
    </ul>
    
    </div>
    );

}

export default Personas;