import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Peliculas=()=> {

    const [movies,setMovies] = useState([]);


    useEffect(()=>{
    
        axios.get('https://swapi.dev/api/films/')
        
        .then(response => setMovies(response.data.results))
        .catch(error => console.error(error));
        
        },[]);
    
    
    return(
      <div className='lista_starwars'>
    
    <ul className='listas'>
    
    {movies.map(movies => (
    
    <li className='listacompleta' key={movies.title}> 
        <p>Name: {movies.title}</p>
        <p>Episode: {movies.episode_id}</p>
        <p>Plot: {movies.opening_crawl}</p>
        <p>Director:{movies.director}</p>
        <p>Producer: {movies.producer}</p>
        <p>Release date: {movies.release_date}</p>
         </li>
    
    ))}
    </ul>
    
    </div>
    );

}

export default Peliculas;