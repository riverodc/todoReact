import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';



//createRoot: Nuevo método para crear una raíz a rendero unmount. 
//Úselo en lugar de ReactDOM.render. Las nuevas características 
//de React 18 no funcionan sin él.

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


  
