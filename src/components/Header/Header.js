import React, {Component} from 'react'
import FoodPortoImg from './../../assets/foodPortoImg.jpg'
import {Row} from 'react-bootstrap';
import Container from '@material-ui/core/Container';

import './header.css'

class Header extends Component {	
	render() {
		return(
			<div>
				<Container className="header">
					<Row>
						<img alt="Logo do Food Park Porto" src={FoodPortoImg} />
					</Row>
					<Row>
						Gerenciador de Cardápios!<br/> Selecione um Restaurante:
					</Row>
				</Container>
			</div>
		)
	}
}
export default Header