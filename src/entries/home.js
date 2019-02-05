import React from 'react';
import ReactDOM from 'react-dom';
// Importamos dependencias de React
import Home from '../pages/containers/home';
//import Playlist from '../../src/pages/containers/home'
import data from '../api.json'

const homeContainer = document.getElementById('homeContainer');
// Referenciamos un elemento con ID app

//const holaMundo = <h1>Hola Mundo!</h1>;
// Insertamos en una constante lo que queremos renderizar
//ReactDOM.render(holaMundo, app);
ReactDOM.render(<Home data={data}/>, homeContainer);
// Le decimos a ReactDOM que renderizar y donde renderizar