import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Naves=() =>{

    
const [starships,setStarships] = useState([]);


useEffect(()=>{

    axios.get('https://swapi.dev/api/starships')
    
    .then(response => setStarships(response.data.results))
    .catch(error => console.error(error));
    
    },[]);


return(
    <div className='lista_starwars'>

<ul className='listas'>

{starships.map(starships => (

<li className="listacompleta" key={starships.name}> 
    
    <p>Model: {starships.model}</p>
    <p>Manufacturer: {starships.manufacturer}</p>
    <p>Cost in credits: ${starships.cost_in_credits}</p>
    <p>Length: {starships.length}</p>
    <p>Maximum atmosphering speed: {starships.max_atmosphering_speed} MPH</p>
     </li>


))}
</ul>

</div>
);
};

export default Naves;