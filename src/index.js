import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



//createRoot: Nuevo método para crear una raíz a rendero unmount. 
//Úselo en lugar de ReactDOM.render. Las nuevas características 
//de React 18 no funcionan sin él.

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 
  <React.StrictMode>
    <App/>
  </React.StrictMode>

);


  
