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
        <Redirect from='*' to="/" />
    </Switch>
