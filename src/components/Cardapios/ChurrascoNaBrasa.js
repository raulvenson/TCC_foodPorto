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
import AvaliacaoModal from '../Modal/AvaliacaoModal'

import './TheDogFather.css'
import CnBlogo from './../../assets/cardapioCnB/NaBrasaLogo.png'

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
          <img src={CnBlogo}  className="img-header" alt="Churrasco na Brasa icon"/>
          Churrasco na Brasa
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
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <div className="font-topic">Espetinhos</div>
        </ExpansionPanelSummary>
        
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="Espetinho de Carne (Fraldinha)"
                desc="Completo acompanha arroz, vinagrete (tomate e repolho), feijão tropeiro e mandioca cozida."
                price="Simples R$10,00 - Completo R$18,00"
                img="semImagem.jpg"
                path="cardapioCnB"              
                /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Espetinho de Frango"
                desc="Completo acompanha arroz, vinagrete (tomate e repolho), feijão tropeiro e mandioca cozida."
                price="Simples R$10,00 - Completo R$18,00"
                img="semImagem.jpg"
                path="cardapioCnB"                
                /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Espetinho de Frango com Bacon"
                desc="Completo acompanha arroz, vinagrete (tomate e repolho), feijão tropeiro e mandioca cozida."
                price="Simples R$10,00 - Completo R$18,00"
                img="semImagem.jpg"
                path="cardapioCnB"             
                /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Espetinho de Cupim Mexicano"
                desc="Completo acompanha arroz, vinagrete (tomate e repolho), feijão tropeiro e mandioca cozida."
                price="Simples R$10,00 - Completo R$18,00"
                img="semImagem.jpg"
                path="cardapioCnB"                
                /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Espetinho de Picanha"
                desc="Completo acompanha arroz, vinagrete (tomate e repolho), feijão tropeiro e mandioca cozida."
                price="Simples R$20,00 - Completo R$28,00"
                img="semImagem.jpg"
                path="cardapioCnB"                
                /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Espetinho de Frango"
                desc="Completo acompanha arroz, vinagrete (tomate e repolho), feijão tropeiro e mandioca cozida."
                price="Simples R$10,00 - Completo R$18,00"
                img="semImagem.jpg"
                path="cardapioCnB"                
                /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Espetinho de Queijo"
                desc="Completo acompanha arroz, vinagrete (tomate e repolho), feijão tropeiro e mandioca cozida."
                price="Simples R$10,00 - Completo R$18,00"
                img="semImagem.jpg"
                path="cardapioCnB"                
                /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Espetinho de Calabresa"
                desc="Completo acompanha arroz, vinagrete (tomate e repolho), feijão tropeiro e mandioca cozida."
                price="Simples R$10,00 - Completo R$18,00"
                img="semImagem.jpg"
                path="cardapioCnB"                
                /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <div className="font-topic">Porções</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="Porção de Picanha (450g)"
                desc="Picanha acebolado com mandioca cozida."
                price="R$55,00"
                img="semImagem.jpg"
                path="cardapioCnB" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Porção de Filé Mignon (450g)"
                desc="Filé Mignon acebolado com mandioca cozida."
                price="R$55,00"
                img="semImagem.jpg"
                path="cardapioCnB" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Porção de Alcatra (450g)"
                desc="Alcatra acebolado com mandioca cozida."
                price="R$40,00"
                img="semImagem.jpg"
                path="cardapioCnB" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Porção de Mandioca Frita (450g)"
                desc=""
                price="R$15,00"
                img="semImagem.jpg"
                path="cardapioCnB" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Porção de Calabresa (450g)"
                desc="Calabresa acebolada"
                price="R$25,00"
                img="semImagem.jpg"
                path="cardapioCnB" 
              /> 
            </Paper>
            </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <div className="font-topic">Bebidas</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="Refrigerante Lata"
                desc=""
                price="R$4,00"
                img="semImagem.jpg"
                path="cardapioCnB" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Água Mineral"
                desc=""
                price="R$4,00"
                img="semImagem.jpg"
                path="cardapioCnB" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Água Mineral com Gás"
                desc=""
                price="R$4,00"
                img="semImagem.jpg"
                path="cardapioCnB" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Suco lata (Del Valle)"
                desc=""
                price="R$4,00"
                img="semImagem.jpg"
                path="cardapioCnB" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Aquárius Fresh"
                desc=""
                price="R$5,00"
                img="semImagem.jpg"
                path="cardapioCnB" 
              /> 
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