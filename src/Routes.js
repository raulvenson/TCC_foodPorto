import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import ListaRestaurantes from './components/ListaRestaurantes/ListaRestaurantes'
import TheDogFather from './components/Cardapios/TheDogFather';
import LeBruto from './components/Cardapios/LeBruto';
import ChurrascoNaBrasa from './components/Cardapios/ChurrascoNaBrasa';
import GeneralMex from './components/Cardapios/GeneralMex';
import FinoSabor from './components/Cardapios/FinoSabor';
import TioLuigi from './components/Cardapios/TioLuigi';
import AkioJapa from './components/Cardapios/AkioJapa';
import IceRozo from './components/Cardapios/IceRozo';
import BarChoperia from './components/Cardapios/BarChoperia';
import Italian from './components/Cardapios/Italian';
import ParqueAlegria from './components/Cardapios/ParqueAlegria';

export default props =>
    <Switch>
        <Route exact path="/" component={ListaRestaurantes}/>
        <Route path="/cardapioTDF" component={TheDogFather} />
        <Route path="/cardapioLB" component={LeBruto} />
        <Route path="/cardapioCnB" component={ChurrascoNaBrasa} />
        <Route path="/cardapioGM" component={GeneralMex} />
        <Route path="/cardapioFS" component={FinoSabor} />
        <Route path="/cardapioTL" component={TioLuigi} />
        <Route path="/cardapioAJ" component={AkioJapa} />
        <Route path="/cardapioIR" component={IceRozo} />
        <Route path="/cardapioBC" component={BarChoperia} />
        <Route path="/cardapioITA" component={Italian} />
        <Route path="/parqueAlegria" component={ParqueAlegria} />
        <Redirect from='*' to="/" />
    </Switch>
