import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
// import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom';
// import Whats_qld from '../../assets/whats_qld.png';
import { TiArrowBackOutline } from 'react-icons/ti';
// import Modal from '../Modal/Modal'
import AvaliacaoModal from '../Modal/AvaliacaoModal'

import './TheDogFather.css'

import ParqueAlegriaLogo from './../../assets/parqueAlegria/ParqueAlegriaLogo.png';
import Img01 from './../../assets/parqueAlegria/Img01.jpg';
import Img02 from './../../assets/parqueAlegria/Img02.jpg';
import Img03 from './../../assets/parqueAlegria/Img03.jpg';
import Img04 from './../../assets/parqueAlegria/Img04.jpg';
import Img05 from './../../assets/parqueAlegria/Img05.jpg';



// import Grid from '@material-ui/core/Grid';

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
          <img src={ParqueAlegriaLogo}  className="img-header" alt="General Mex logo"/>
          Parque da Alegria
        </div>    
        <div className="cabecalho icones">
          <Link to="/listaRestaurantes" style={{ textDecoration: 'none' }}><TiArrowBackOutline className="back-icon"/></Link>
        </div>
        <div className="cabecalho icones">
          <AvaliacaoModal className="avaliacao" />
        </div>
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
              <h1>Playground e Espaço de Festas</h1>
              <h2>Informações para reserva do Espaço de Festas - WhatsApp (65)99939-0805</h2>
            </Paper>
            <Paper className={classes.root}>            
              <img width="280px" alt="img01" src={Img01}/>
            </Paper>
            <Paper className={classes.root}>            
              <img width="280px" alt="img02" src={Img02}/>
            </Paper>
            <Paper className={classes.root}>            
              <img width="280px" alt="img03" src={Img03}/>
            </Paper>
            <Paper className={classes.root}>            
              <img width="280px" alt="img04" src={Img04}/>
            </Paper>
            <Paper className={classes.root}>            
              <img width="280px" alt="img05" src={Img05}/>
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </div>
    </div>
  );
}