import React, {Component} from 'react'
import FoodPortoImg from './../../assets/foodPortoImg.jpg'
import {Row} from 'react-bootstrap';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom';

import './header.css'

class Header extends Component {	
	render() {
		return(
			<div>
				<Link to="/listaRestaurantes" style={{ textDecoration: 'none' }}>
				<Container className="header">
					<Row>
						<img alt="Logo do Food Park Porto" src={FoodPortoImg} />
					</Row>
					<Row>
						Gerenciador de Cardápios!
					</Row>
				</Container>
				</Link>
			</div>
		)
	}
}
export default Header