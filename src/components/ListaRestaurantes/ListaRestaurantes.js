import React from 'react';

import Typography from '@material-ui/core/Typography';
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
      <Typography variant="h5" component="h3" className="font">
        <img src={TheDogFatherImg}  className="img" alt=" The Dog Father icon"/>
        The DogFather
        
      </Typography>
    </Paper>
    </Link>
    <Link to="/cardapioLB" style={{ textDecoration: 'none' }}>
    <Paper className="paper">
      <Typography variant="h5" component="h3">
        <img src={LeBrutoImg}  className="img" alt=" Le Bruto icon"/>
        Le Bruto
      </Typography>
    </Paper>
    </Link>
    <Link to="/cardapioTDF" style={{ textDecoration: 'none' }}>
    <Paper className="paper">
      <Typography variant="h5" component="h3">
        <img src={TheDogFatherImg}  className="img" alt=" The Dog Father icon"/>
        Exemplo
      </Typography>
    </Paper>
    </Link>
    <Link to="/cardapioTDF" style={{ textDecoration: 'none' }}>
    <Paper className="paper">
      <Typography variant="h5" component="h3">
        <img src={TheDogFatherImg}  className="img" alt=" The Dog Father icon"/>
        Exemplo
      </Typography>
    </Paper>
    </Link>
    <Link to="/cardapioTDF" style={{ textDecoration: 'none' }}>
    <Paper className="paper">
      <Typography variant="h5" component="h3">
        <img src={TheDogFatherImg}  className="img" alt=" The Dog Father icon"/>
        Exemplo
      </Typography>
    </Paper>
    </Link>
    <Link to="/cardapioTDF" style={{ textDecoration: 'none' }}>
    <Paper className="paper">
      <Typography variant="h5" component="h3">
        <img src={TheDogFatherImg}  className="img" alt=" The Dog Father icon"/>
        Exemplo
      </Typography>
    </Paper>
    </Link>
    <Link to="/cardapioTDF" style={{ textDecoration: 'none' }}>
    <Paper className="paper">
      <Typography variant="h5" component="h3">
        <img src={TheDogFatherImg}  className="img" alt=" The Dog Father icon"/>
        Exemplo
      </Typography>
    </Paper>
    </Link>
    <Link to="/cardapioTDF" style={{ textDecoration: 'none' }}>
    <Paper className="paper">
      <Typography variant="h5" component="h3">
        <img src={TheDogFatherImg}  className="img" alt=" The Dog Father icon"/>
        Exemplo
      </Typography>
    </Paper>
    </Link>
    </div>
    </div>
  );
}