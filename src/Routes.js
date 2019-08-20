import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import ListaRestaurantes from './components/ListaRestaurantes/ListaRestaurantes'
import TheDogFather from './components/Cardapios/TheDogFather';
import LeBruto from './components/Cardapios/LeBruto'

export default props =>
    <Switch>
        <Route exact path="/" component={ListaRestaurantes}/>
        <Route path="/cardapioTDF" component={TheDogFather} />
        <Route path="/cardapioLB" component={LeBruto} />
        <Redirect from='*' to="/" />
    </Switch>
