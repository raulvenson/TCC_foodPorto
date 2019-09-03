import React from 'react';


import Paper from '@material-ui/core/Paper';

import {Link} from 'react-router-dom'


import LeBrutoImg from './../../assets/lebruto.png' 
import TheDogFatherImg from './../../assets/theDogFather.jpg'

import './listaRestaurantes.css'
import Header from '../Header/Header';



export default function ImgMediaCard() {


  return (
    <div className="background">
      <Header/>
    <div className="restaurante">
    <Link to="/cardapioTDF" style={{ textDecoration: 'none' }} >
    <Paper className="paper">
      <div className="font">
        <img src={TheDogFatherImg}  className="img" alt=" The Dog Father icon"/>
        The DogFather       
      </div>
    </Paper>
    </Link>
    <Link to="/cardapioLB" style={{ textDecoration: 'none' }}>
    <Paper className="paper">
      <div variant="h5" component="h3" className="font">
        <img src={LeBrutoImg}   className="img img-lebruto" alt=" Le Bruto icon"/>
        Le Bruto
      </div>
    </Paper>
    </Link>
    <Link to="/cardapioTDF" style={{ textDecoration: 'none' }}>
    <Paper className="paper">
      <div variant="h5" component="h3">
        <img src={TheDogFatherImg}  className="img" alt=" The Dog Father icon"/>
        Exemplo
      </div>
    </Paper>
    </Link>
    <Link to="/cardapioTDF" style={{ textDecoration: 'none' }}>
    <Paper className="paper">
      <div variant="h5" component="h3">
        <img src={TheDogFatherImg}  className="img" alt=" The Dog Father icon"/>
        Exemplo
      </div>
    </Paper>
    </Link>
    <Link to="/cardapioTDF" style={{ textDecoration: 'none' }}>
    <Paper className="paper">
      <div variant="h5" component="h3">
        <img src={TheDogFatherImg}  className="img" alt=" The Dog Father icon"/>
        Exemplo
      </div>
    </Paper>
    </Link>
    <Link to="/cardapioTDF" style={{ textDecoration: 'none' }}>
    <Paper className="paper">
      <div variant="h5" component="h3">
        <img src={TheDogFatherImg}  className="img" alt=" The Dog Father icon"/>
        Exemplo
      </div>
    </Paper>
    </Link>
    <Link to="/cardapioTDF" style={{ textDecoration: 'none' }}>
    <Paper className="paper">
      <div variant="h5" component="h3">
        <img src={TheDogFatherImg}  className="img" alt=" The Dog Father icon"/>
        Exemplo
      </div>
    </Paper>
    </Link>
    <Link to="/cardapioTDF" style={{ textDecoration: 'none' }}>
    <Paper className="paper">
      <div variant="h5" component="h3">
        <img src={TheDogFatherImg}  className="img" alt=" The Dog Father icon"/>
        Exemplo
      </div>
    </Paper>
    </Link>
    </div>
    </div>
  );
}