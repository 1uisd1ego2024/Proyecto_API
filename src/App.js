import React, { useState } from "react";

import Naves from "./componentes/Naves";

import Planetas from "./componentes/Planetas";
import Personas from "./componentes/Personas";
import Peliculas from "./componentes/Peliculas";
import "./estilos/estilos.css";


function App () {
  

      

  const [view,setView] = useState('planets');


  const mostrarcomponentes = () => {
    

    
    switch (view) {
      case 'starships':
        return  <Naves /> ;
      case 'people':
        return <Personas />;
      case 'films':
        return <Peliculas />;
      default:
        return <Planetas />;
    }
   
   
  };

  return (

    <div className="App">
      
    
      <br></br>
      <div className="cajabotones">
      <button className="boton1" onClick={() => setView('planets')}>Planets</button>
      <button className="boton2" onClick={() => setView('films')}>Movies</button>
      <button className="boton3" onClick={() => setView('starships')}>Starships</button>
      <button className="boton4" onClick={() => setView('people')}>People</button>
      {mostrarcomponentes()} 
      </div>
    </div>
   
  )
 
  
}

export default App;

