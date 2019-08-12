import React, {Component} from 'react'
import FoodPortoImg from './../../assets/foodPortoImg.jpg'
// import {Row} from 'react-bootstrap';
import Container from '@material-ui/core/Container';

import './header.css'

class Header extends Component {	
	render() {
		return(
			<div>
				<Container className="header">
					<img alt="Logo do Food Park Porto" src={FoodPortoImg} />
				</Container>
			</div>
		)
	}
}
export default Header