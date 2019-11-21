import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom';
import Whats_qld from '../../assets/whats_.png';
import { TiArrowBackOutline } from 'react-icons/ti';
import Modal from '../Modal/Modal'
// import AvaliacaoModal from '../Modal/AvaliacaoModal'

import './TheDogFather.css'

import ItalianLogo from './../../assets/cardapioITA/ItalianLogo.png'


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
          <img src={ItalianLogo}  className="img-header" alt="General Mex logo"/>
          Italian
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
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <div className="font-topic">Pratos</div>
        </ExpansionPanelSummary>
        
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="Macarrão"
                desc="Monte você mesmo com mais de 40 opções de condimentos."
                price="R$20,00"
                img="Macarrao.jpeg"
                path="cardapioITA" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Panqueca"
                desc="Acompanha uma porção de Arroz. Monte você mesmo com mais de 40 opções de condimentos."
                price="R$20,00"
                img="Panqueca.jpeg"
                path="cardapioITA" 
              /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <div className="font-topic">Opções de Ingredientes</div>
        </ExpansionPanelSummary>
        
        <ExpansionPanelDetails className="details">
          <Paper className={classes.root}>
            <h1> Alcaparras, Alho, Alho Poró, Azeite, Azeitona Preta, Azeitona Verde, Bacon, Brócolis, Calabresa, Camarão, Carne Moída,Carne Seca, Cebola, Cebolinha, Cenoura, Champignon, Coentro, Couve Flor, Ervilha, Frango, Manjericão, Manteiga, Milho, Orégano, Palmito, Passas, Pimenta Calabresa, Pimenta de Cheiro, Pimentão Verde, Pimentão Vermelho, Presunto, Queijo, Rúcula, Salsinha, Salsicha, Tomate e Tomate Seco </h1>
          </Paper>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <div className="font-topic">Molhos</div>
        </ExpansionPanelSummary>
        
        <ExpansionPanelDetails className="details">
          <Paper className={classes.root}>
            <h1>Branco, 4 queijos, Rosé e Barbecue </h1>
          </Paper>
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