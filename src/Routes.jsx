import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Home from './components/Home'

export default props =>
    <Switch>
        <Route exact path="/" component={Home}/>
        {/* <Route path="/cardapioTGF" component={} /> */}
        <Redirect from='*' to="/" />
    </Switch>
