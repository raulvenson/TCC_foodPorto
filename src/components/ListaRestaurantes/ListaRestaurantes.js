import React from 'react';


import Paper from '@material-ui/core/Paper';

import {Link} from 'react-router-dom'


import LeBrutoImg from './../../assets/lebruto.png' 
import TheDogFatherImg from './../../assets/theDogFather.jpg'

import './listaRestaurantes.css'
import Header from '../Header/Header';



export default function ImgMediaCard() {


  return (
    <div className="restaurante">
    <div className="background header">
      <Header/>
    </div>
    
    
    <Link to="/cardapioTDF" style={{ textDecoration: 'none' }} >
    <Paper className="paper">
      <div className="font-lista">
        <img src={TheDogFatherImg}  className="img" alt=" The Dog Father icon"/>
        The DogFather       
      </div>
    </Paper>
    </Link>
    <Link to="/cardapioLB" style={{ textDecoration: 'none' }}>
    <Paper className="paper">
      <div variant="h5" component="h3" className="font-lista">
        <img src={LeBrutoImg}   className="img img-lebruto" alt=" Le Bruto icon"/>
        Le Bruto
      </div>
    </Paper>
    </Link>
    <Link to="/cardapioTDF" style={{ textDecoration: 'none' }}>
    <Paper className="paper">
      <div variant="h5" component="h3" className="font-lista">
        <img src={TheDogFatherImg}  className="img" alt=" The Dog Father icon"/>
        Exemplo
      </div>
    </Paper>
    </Link>
    <Link to="/cardapioTDF" style={{ textDecoration: 'none' }}>
    <Paper className="paper">
      <div variant="h5" component="h3" className="font-lista">
        <img src={TheDogFatherImg}  className="img" alt=" The Dog Father icon"/>
        Exemplo
      </div>
    </Paper>
    </Link>
    <Link to="/cardapioTDF" style={{ textDecoration: 'none' }}>
    <Paper className="paper">
      <div variant="h5" component="h3" className="font-lista">
        <img src={TheDogFatherImg}  className="img" alt=" The Dog Father icon"/>
        Exemplo
      </div>
    </Paper>
    </Link>
    <Link to="/cardapioTDF" style={{ textDecoration: 'none' }}>
    <Paper className="paper">
      <div variant="h5" component="h3" className="font-lista">
        <img src={TheDogFatherImg}  className="img" alt=" The Dog Father icon"/>
        Exemplo
      </div>
    </Paper>
    </Link>
    <Link to="/cardapioTDF" style={{ textDecoration: 'none' }}>
    <Paper className="paper">
      <div variant="h5" component="h3" className="font-lista">
        <img src={TheDogFatherImg}  className="img" alt=" The Dog Father icon"/>
        Exemplo
      </div>
    </Paper>
    </Link>
    <Link to="/cardapioTDF" style={{ textDecoration: 'none' }}>
    <Paper className="paper">
      <div variant="h5" component="h3" className="font-lista">
        <img src={TheDogFatherImg}  className="img" alt=" The Dog Father icon"/>
        Exemplo
      </div>
    </Paper>
    </Link>
    </div>
  );
}