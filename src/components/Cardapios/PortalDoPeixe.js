import React, { Component } from 'react';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
// import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom';
import { TiArrowBackOutline } from 'react-icons/ti';
// import Modal from '../Modal/Modal'

// Css
import './TheDogFather.css'

// Logo
import PortalDoPeixeLogo from './../../assets/cardapioPdP/PortalDoPeixeLogo.jpeg'

// Envia Mensagem WhatsApp
// import EnviarMensagem from '../enviarMensagemWPP/EnviarMensagem'

// Importa o Analytics
import { analytics } from '../../firebase';

//Imagens
import Porcoes from './../../assets/cardapioPdP/Porcoes.jpeg'
import Complementos from './../../assets/cardapioPdP/Complementos.jpeg'
import Cevicht from './../../assets/cardapioPdP/Cevicht.jpeg'
import Caldo from './../../assets/cardapioPdP/Caldo.jpeg'

const styles = (theme) => ({
  root: {
    padding: theme.spacing(1.5 , 1),
    marginBottom: 6,
    backgroundColor: '#ffc025',
  },
});

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

class PortalDoPeixe extends Component {
  state = {
    expanded: false,
    timeoutId: null
  };

  componentDidMount() {
    // Espera o component ser montado
    const timeoutId = setTimeout(() => {
      analytics.logEvent('restaurante_view', {
        clickDiario: `PortalDoPeixe - ${new Date().toLocaleDateString()}`,
        clickMensal: `PortalDoPeixe - ${String(new Date().getMonth() + 1).padStart(2, '0')}/${new Date().getFullYear()}`
      });
    }, 5000 /* tempo in ms */ );
    this.setState({ timeoutId });
  }

  componentWillUnmount() {
    // Antes do componente ser desmontado
    const { timeoutId } = this.state;
    // cancela o tempo de 5s
    clearTimeout(timeoutId);
  }

  handleChange = (panel) => (event, newExpanded) => {
    this.setExpanded(newExpanded ? panel : false);
  };

  setExpanded = (value) => {
    this.setState({
      expanded: value
    })
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

  return (
    <div className="cardapio">
      <div className="header">
      <Paper className={classes.root}>
        <div className="font-lista cabecalho">
          <img src={PortalDoPeixeLogo}  className="img-header" alt="Portal do Peixe logo"/>
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
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
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
    </div>
  );
}
};

export default withStyles(styles)(PortalDoPeixe);