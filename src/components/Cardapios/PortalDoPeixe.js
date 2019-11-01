import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
// import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom';
import Whats_qld from '../../assets/whats_.png';
import { TiArrowBackOutline } from 'react-icons/ti';
// import Modal from '../Modal/Modal'
// import AvaliacaoModal from '../Modal/AvaliacaoModal'

import './TheDogFather.css'

import PortalDoPeixeLogo from './../../assets/cardapioPdP/PortalDoPeixeLogo.jpeg'
import Porcoes from './../../assets/cardapioPdP/Porcoes.jpeg'
import Complementos from './../../assets/cardapioPdP/Complementos.jpeg'
import Cevicht from './../../assets/cardapioPdP/Cevicht.jpeg'
import Caldo from './../../assets/cardapioPdP/Caldo.jpeg'


import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1.5 , 1),
    marginBottom: 6,
    backgroundColor: '#ffc025',
  },
}));

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

// const ExpansionPanelSummary = withStyles({
//   root: {
//     backgroundColor: 'rgba(0, 0, 0, .03)',
//     borderBottom: '1px solid rgba(0, 0, 0, .125)',
//     marginBottom: -1,
//     minHeight: 56,
//     '&$expanded': {
//       minHeight: 56,
//     },
//   },
//   content: {
//     '&$expanded': {
//       margin: '12px 0',
//     },
//   },
//   expanded: {},
// })(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

export default function CustomizedExpansionPanels() {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState('  ');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="cardapio">
      <div className="header">
      <Paper className={classes.root}>
        <div className="font-lista cabecalho">
          <img src={PortalDoPeixeLogo}  className="img-header" alt="General Mex logo"/>
          Portal do Peixe
        </div>    
        <div className="cabecalho icones">
          <Link to="/listaRestaurantes" style={{ textDecoration: 'none' }}><TiArrowBackOutline className="back-icon"/></Link>
        </div>
        {/* <div className="cabecalho icones">
          <AvaliacaoModal className="avaliacao" />
        </div> */}
      </Paper>
      </div>
      <div className="content">
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        {/* <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <div className="font-topic">Pratos</div>
        </ExpansionPanelSummary> */}
        
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <h1>Porções</h1>
              <img className="img-parque" alt="Porções" src={Porcoes}/>
            </Paper>
            <Paper className={classes.root}>            
              <h1>Complementos</h1>
              <img className="img-parque" alt="Complementos" src={Complementos}/>
            </Paper>
            <Paper className={classes.root}>            
              <h1>Cevicht</h1>
              <img className="img-parque" alt="Cevicht" src={Cevicht}/>
            </Paper>
            <Paper className={classes.root}>            
              <h1>Caldo</h1>
              <img className="img-parque" alt="Caldo" src={Caldo}/>
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </div>
      <Grid container justify={"center"} className="footer">
        <a href="https://api.whatsapp.com/send?phone=5565999271048&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20pedido!" >
          <img className="wpp" src={Whats_qld} alt="link para chat WhatsApp"/>
        </a> 
      </Grid>
    
    </div>
  );
}