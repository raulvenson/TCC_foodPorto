import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import ListaRestaurantes from './components/ListaRestaurantes/ListaRestaurantes'
import TheDogFather from './components/Cardapios/TheDogFather';

export default props =>
    <Switch>
        <Route exact path="/listaRestaurantes" component={ListaRestaurantes}/>
        <Route path="/cardapioTGF" component={TheDogFather} />
        <Redirect from='*' to="/listaRestaurantes" />
    </Switch>
