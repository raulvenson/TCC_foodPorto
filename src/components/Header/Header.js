import React from 'react'
import FoodPortoImg from './../../assets/foodPortoImg.jpg'
import {Row} from 'react-bootstrap';
import Container from '@material-ui/core/Container';




import './header.css'

export default props => {	
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

