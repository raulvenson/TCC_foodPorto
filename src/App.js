import React from 'react';

import Header from './components/Header/Header'
import ListaRestaurantes from './components/ListaRestaurantes/ListaRestaurantes'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/> 
      <ListaRestaurantes />
    </div>  
  );
}

export default App;
