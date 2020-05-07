import React, { Component } from 'react';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom';
import { TiArrowBackOutline } from 'react-icons/ti';
import Modal from '../Modal/Modal'

// Css
import './TheDogFather.css'

// Logo
import ItalianLogo from './../../assets/cardapioITA/ItalianLogoSF.png'

// Envia Mensagem WhatsApp
import EnviarMensagem from '../enviarMensagemWPP/EnviarMensagem'

// Importa o Analytics
import { analytics } from '../../firebase';

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

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

class Italian extends Component {
  state = {
    expanded: false,
    timeoutId: null
  };

  componentDidMount() {
    // Espera o component ser montado
    const timeoutId = setTimeout(() => {
      analytics.logEvent('restaurante_view', {
        clickDiario: `Italian - ${new Date().toLocaleDateString()}`,
        clickMensal: `Italian - ${String(new Date().getMonth() + 1).padStart(2, '0')}/${new Date().getFullYear()}`
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
          <img src={ItalianLogo}  className="img-header" alt="Italian logo"/>
          Italian
        </div>    
        <div className="cabecalho icones">
          <Link to="/listaRestaurantes" style={{ textDecoration: 'none' }}><TiArrowBackOutline className="back-icon"/></Link>
        </div>
      </Paper>
      </div>
      <div className="content">
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <div className="font-topic">Promoções</div>
        </ExpansionPanelSummary>
        
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="Macarrão + Suco"
                desc="Promoção válida para todas as Quartas-Feiras"
                price="R$30,00"
                img="Italian.jpeg"
                path="carousel" 
              /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <div className="font-topic">Pratos</div>
        </ExpansionPanelSummary>
        
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="Macarrão"
                desc="Monte você mesmo com mais de 40 opções de condimentos."
                price="R$25,00"
                img="Macarrao.jpeg"
                path="cardapioITA" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Panqueca"
                desc="Acompanha uma porção de Arroz. Monte você mesmo com mais de 40 opções de condimentos."
                price="R$25,00"
                img="Panqueca.jpeg"
                path="cardapioITA" 
              /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <div className="font-topic">Opções de Ingredientes</div>
        </ExpansionPanelSummary>
        
        <ExpansionPanelDetails className="details">
          <Paper className={classes.root}>
            <h1> Alcaparras, Alho, Alho Poró, Azeite, Azeitona Preta, Azeitona Verde, Bacon, Brócolis, Calabresa, Camarão, Carne Moída,Carne Seca, Cebola, Cebolinha, Cenoura, Champignon, Coentro, Couve Flor, Ervilha, Frango, Manjericão, Manteiga, Milho, Orégano, Palmito, Passas, Pimenta Calabresa, Pimenta de Cheiro, Pimentão Verde, Pimentão Vermelho, Presunto, Queijo, Rúcula, Salsinha, Salsicha, Tomate e Tomate Seco </h1>
          </Paper>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
        <ExpansionPanelSummary aria-controls="panel4d-content" id="panel4d-header">
          <div className="font-topic">Molhos</div>
        </ExpansionPanelSummary>
        
        <ExpansionPanelDetails className="details">
          <Paper className={classes.root}>
            <h1>Branco, 4 queijos, Rosé, Barbecue e ao Sugo</h1>
          </Paper>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </div>
  
      <EnviarMensagem numero="556596940066" nome="Italian"/>

    </div>
  );
};
};

export default withStyles(styles)(Italian);