import React from 'react';
import ReactDOM from 'react-dom/client';


class App extends React.Component{
  render (){
    return (
      <div className = 'Game'>
        <canvas height={600} width={800}>Hi</canvas>
        <input placeholder='Высота' type='number' />
      </div>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

ctx.translate(0, canvas.height); //Разварачиваю систему координат до классической
ctx.rotate(-Math.PI/2);          //

const a = 10;

ctx.clearRect(0, 0, canvas.width, canvas.height);
for (var i = 0; i <= 100000; i += 0.2) {
  ctx.lineTo(i, i*a);           //нарисовать линию от точки страрта до конечной точки
  ctx.moveTo(i, i*a);           //передвинуть точку старта 
}
ctx.stroke(); // обводка