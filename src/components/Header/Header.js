import React from 'react'
import onMenu from './../../assets/onMenu.png'
import {Row} from 'react-bootstrap';
import Container from '@material-ui/core/Container';




import './header.css'

export default props => {	
	return(
		<div className="header">
			
			<Container >
				<Row>
					<img alt="Logo do Food Park Porto" src={onMenu} />
				</Row>
			</Container>
		</div>
	)
}

