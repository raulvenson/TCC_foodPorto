import React, {Component} from 'react'
import FoodPortoImg from './../../assets/foodPortoImg.jpg'
import {Row} from 'react-bootstrap';
import Container from '@material-ui/core/Container';




import './header.css'

class Header extends Component {	
	render() {
		return(
			<div className="header">
				
				<Container >
					<Row>
						<img alt="Logo do Food Park Porto" src={FoodPortoImg} />
					</Row>
				</Container>
			</div>
		)
	}
}
export default Header