import React from 'react';
import ReactDOM from 'react-dom/client';
import "mafs/core.css";

import { Mafs, Coordinates, Plot } from "mafs"




function HelloFx() {
  return (
    <Mafs viewBox={{ x: [0, 10], y: [0, 10] }}
    zoom={{ min: 0.1, max: 2 }}>
      
      <Coordinates.Cartesian />
      <Plot.OfX y={(x) => x*x*x/5} />
    </Mafs>
  )
}



class App extends React.Component{
  render (){
    return (
      <div className = 'Game'>
        
        <input placeholder='Высота' type='number' id='height' />
        <input placeholder='Скорость' type='number' id='velocity' />
        <input type='submit' />
        <div id = "game"></div>
        <HelloFx/>
      </div>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
