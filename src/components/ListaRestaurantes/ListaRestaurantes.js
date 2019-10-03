import React from 'react';


import Paper from '@material-ui/core/Paper';

import {Link} from 'react-router-dom'


import LeBrutoImg from './../../assets/lebruto.png' 
import TheDogFatherImg from './../../assets/thedog.png'
import SemImagem from './../../assets/semImagem.jpg'
import IceRozo from './../../assets/iceRozo.png'
import GeneralMexLogo from './../../assets/cardapioGM/GeneralMexLogo.png'
import Bar from './../../assets/cardapioBC/bar.png'

import './listaRestaurantes.css'
import Header from '../Header/Header';



export default function ImgMediaCard() {

  

  return (
    <div className="restaurante">
    
      <Header/>
    
    
    
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
      <div className="font-lista">
        <img src={LeBrutoImg}   className="img img-lebruto" alt=" Le Bruto icon"/>
        Le Bruto
      </div>
    </Paper>
    </Link>
    <Link to="/cardapioIR" style={{ textDecoration: 'none' }}>
      <Paper className="paper">
        <div variant="h5" component="h3" className="font-lista">
          <img src={IceRozo}  className="img" alt=" The Dog Father icon"/>
          Ice Rozo
        </div>
      </Paper>
    </Link>
    <Link to="/cardapioBC" style={{ textDecoration: 'none' }}>
      <Paper className="paper">
        <div variant="h5" component="h3" className="font-lista">
          <img src={Bar}  className="img" alt=" The Dog Father icon"/>
          O Convés Bar
        </div>
      </Paper>
    </Link>
    <Link to="/cardapioCnB" style={{ textDecoration: 'none' }}>
    <Paper className="paper">
      <div variant="h5" component="h3" className="font-lista">
        <img src={SemImagem}  className="img" alt=" The Dog Father icon"/>
        Churrasco na Brasa
      </div>
    </Paper>
    </Link>
    <Link to="/cardapioGM" style={{ textDecoration: 'none' }}>
      <Paper className="paper">
        <div variant="h5" component="h3" className="font-lista">
          <img src={GeneralMexLogo}  className="img" alt=" The Dog Father icon"/>
          General Mex
        </div>
      </Paper>
    </Link>
    <Link to="/cardapioFS" style={{ textDecoration: 'none' }}>
      <Paper className="paper">
        <div variant="h5" component="h3" className="font-lista">
          <img src={SemImagem}  className="img" alt=" The Dog Father icon"/>
          Fino Sabor
        </div>
      </Paper>
    </Link>
    <Link to="/cardapioTL" style={{ textDecoration: 'none' }}>
      <Paper className="paper">
        <div variant="h5" component="h3" className="font-lista">
          <img src={SemImagem}  className="img" alt=" The Dog Father icon"/>
          Tio Luigi 
        </div>
      </Paper>
    </Link>
    <Link to="/cardapioTDF" style={{ textDecoration: 'none' }}>
      <Paper className="paper">
        <div variant="h5" component="h3" className="font-lista">
          <img src={SemImagem}  className="img" alt=" The Dog Father icon"/>
          Akio Japa
        </div>
      </Paper>
    </Link>
    <Link to="/cardapioITA" style={{ textDecoration: 'none' }}>
      <Paper className="paper">
        <div variant="h5" component="h3" className="font-lista">
          <img src={SemImagem}  className="img" alt=" The Dog Father icon"/>
          Italian Massas e Sucos
        </div>
      </Paper>
    </Link>
    
     
    </div>
  );
}