import React from 'react';


import Paper from '@material-ui/core/Paper';

import {Link} from 'react-router-dom'


import LeBrutoImg from './../../assets/cardapioLeBruto/lebruto.png' 
import TheDogFatherImg from './../../assets/cardapioTDF/thedog.png'

import IceRozo from './../../assets/cardapioIR/iceRozo.png'
import GeneralMexLogo from './../../assets/cardapioGM/GeneralMexLogo.png'
import Bar from './../../assets/cardapioBC/bar.png'
import CnBlogo from './../../assets/cardapioCnB/NaBrasaLogo.png'
import FinoSaborLogo from './../../assets/cardapioFS/finoSaborLogo.png'
import ParqueAlegria from './../../assets/parqueAlegria/ParqueAlegriaLogo.png'
import AkioJapaLogo from './../../assets/cardapioAJ/AkioJapaLogo.png'
import ItalianLogo from './../../assets/cardapioITA/ItalianLogo.png'
import TioLuigiLogo from './../../assets/cardapioTL/TioLuigiLogo.png'
import PortalDoPeixeLogo from './../../assets/cardapioPdP/PortalDoPeixeLogo.jpeg'
import SemImagem from './../../assets/generic/semImagem.jpg'

import './listaRestaurantes.css'
import Header from '../Header/Header';



export default function ImgMediaCard() {

  

  return (
    <div className="restaurante">
    
      <Header/>
    
    

    <Link to="/cardapioBC" style={{ textDecoration: 'none' }}>
      <Paper className="paper">
        <div variant="h5" component="h3" className="font-lista">
          <img src={Bar}  className="img" alt="  O Convés Bar icon"/>
          O Convés Bar
        </div>
      </Paper>
    </Link>
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
          <img src={IceRozo}  className="img" alt=" Ice Rozo icon"/>
          Ice Rozo
        </div>
      </Paper>
    </Link>
    <Link to="/cardapioCnB" style={{ textDecoration: 'none' }}>
    <Paper className="paper">
      <div variant="h5" component="h3" className="font-lista">
        <img src={CnBlogo}  className="img" alt=" Churrasco na Brasa icon"/>
        Churrasco na Brasa
      </div>
    </Paper>
    </Link>
    <Link to="/cardapioGM" style={{ textDecoration: 'none' }}>
      <Paper className="paper">
        <div variant="h5" component="h3" className="font-lista">
          <img src={GeneralMexLogo}  className="img" alt=" General Mex icon"/>
          General Mex
        </div>
      </Paper>
    </Link>
    <Link to="/cardapioFS" style={{ textDecoration: 'none' }}>
      <Paper className="paper">
        <div variant="h5" component="h3" className="font-lista">
          <img src={FinoSaborLogo}  className="img" alt=" Fino Sabor icon"/>
          Fino Sabor
        </div>
      </Paper>
    </Link>
    <Link to="/cardapioTL" style={{ textDecoration: 'none' }}>
      <Paper className="paper">
        <div variant="h5" component="h3" className="font-lista">
          <img src={TioLuigiLogo}  className="img" alt=" Tio Luigi  icon"/>
          Tio Luigi 
        </div>
      </Paper>
    </Link>
    <Link to="/cardapioAJ" style={{ textDecoration: 'none' }}>
      <Paper className="paper">
        <div variant="h5" component="h3" className="font-lista">
          <img src={AkioJapaLogo}  className="img" alt="AkioJapaLogo"/>
          Akio Japa
        </div>
      </Paper>
    </Link>
    <Link to="/cardapioITA" style={{ textDecoration: 'none' }}>
      <Paper className="paper">
        <div variant="h5" component="h3" className="font-lista">
          <img src={ItalianLogo}  className="img" alt="Italian icon"/>
          Italian
        </div>
      </Paper>
    </Link>
    <Link to="/cardapioPdP" style={{ textDecoration: 'none' }}>
      <Paper className="paper">
        <div variant="h5" component="h3" className="font-lista">
          <img src={PortalDoPeixeLogo}  className="img" alt=" Portal do Peixe icon"/>
          Portal do Peixe
        </div>
      </Paper>
    </Link>
    <Link to="/cardapioTG" style={{ textDecoration: 'none' }}>
      <Paper className="paper">
        <div variant="h5" component="h3" className="font-lista">
          <img src={SemImagem}  className="img" alt=" Ting Gourmet icon"/>
          Ting Gourmet
        </div>
      </Paper>
    </Link>
    <Link to="/parqueAlegria" style={{ textDecoration: 'none' }}>
      <Paper className="paper">
        <div variant="h5" component="h3" className="font-lista">
          <img src={ParqueAlegria}  className="img" alt=" Parque da Alegria icon"/>
          Parque da Alegria
        </div>
      </Paper>
    </Link>
    
    </div>
  );
}