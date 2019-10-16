import React from 'react'
// import onMenu from './../../assets/onMenu.png'
// import canto from './../../assets/canto.png'
// import Grid from '@material-ui/core/Grid';
import onMenu from './../../assets/Capa.png'





import './header.css'

export default props => {	
	return(
		<img className="header-home" alt="Logo do Food Park Porto" src={onMenu} />
		// <Grid container direction="row">			
		// 	<Grid item justify="center"><img height="250px" alt="Logo do Food Park Porto" src={onMenu} /></Grid >
		// 	<Grid item justify="end"><img height="150px" alt="Logo do Food Park Porto" src={canto} /></Grid>
		// </Grid>
	)
}

