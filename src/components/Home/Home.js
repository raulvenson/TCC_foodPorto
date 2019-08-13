import React, {Component} from 'react'

import Header from '../Header/Header'
import ListaRestaurantes from '../ListaRestaurantes/ListaRestaurantes'

class Home extends Component {
	render () {
		return(
			<div>
				<Header />
				<ListaRestaurantes />
			</div>
		);
	}
}

export default Home;
	