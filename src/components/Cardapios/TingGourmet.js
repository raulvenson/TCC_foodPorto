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

import ItalianLogo from './../../assets/generic/semImagem.jpg'


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
          Ting Gourmet
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
          <div className="font-topic">Grelhados</div>
        </ExpansionPanelSummary>
        
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="02 - Contra Filé"
                desc="Prato Executivo, acompanha Arroz, Salada e Fritas"
                price="R$25,00"
                img="semImagem.jpg"
                path="cardapioTDF" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="03 - Picanha"
                desc="Prato Executivo, acompanha Arroz, Salada e Fritas"
                price="R$28,00"
                img="semImagem.jpg"
                path="cardapioTDF" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="04 - Frango"
                desc="Prato Executivo, acompanha Arroz, Salada e Fritas"
                price="R$20,00"
                img="semImagem.jpg"
                path="cardapioTDF" 
              /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <div className="font-topic">Risotos</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="05 - Camarão"
                desc="Arroz Arbório, Molho Vermelho, Camarão."
                price="R$26,00"
                img="semImagem.jpg"
                path="cardapioTDF" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="06 - Carne"
                desc="Arroz Arbório, Molho Branco, Carne Bovina."
                price="R$22,00"
                img="semImagem.jpg"
                path="cardapioTDF" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="07 - Frango"
                desc="Arroz Arbório, Molho Branco, Frango."
                price="R$20,00"
                img="semImagem.jpg"
                path="cardapioTDF" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="08 - Vegetariana"
                desc="Arroz Arbório, Brócolis, Couve Flor, Tomate Seco e Rúcula."
                price="R$22,00"
                img="semImagem.jpg"
                path="cardapioTDF" 
              /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <div className="font-topic">Filé Parmegiana</div>
        </ExpansionPanelSummary>    
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="09 - Carne"
                desc="Filé empanado com recheio de presunto e queijo com molho vermelho. Acompanha Arroz, Salada e Fritas"
                price="R$25,00"
                img="semImagem.jpg"
                path="cardapioTDF" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="10 - Peixe"
                desc="Filé empanado com recheio de presunto e queijo com molho vermelho. Acompanha Arroz, Salada e Fritas"
                price="R$25,00"
                img="semImagem.jpg"
                path="cardapioTDF" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="11 - Frango"
                desc="Filé empanado com recheio de presunto e queijo com molho vermelho. Acompanha Arroz, Salada e Fritas"
                price="R$21,00"
                img="semImagem.jpg"
                path="cardapioTDF" 
              /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary aria-controls="panel4d-content" id="panel4d-header">
          <div className="font-topic">Chapa Quente</div>
        </ExpansionPanelSummary>    
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="12 - Picanha"
                desc="Na chapa cortada em tiras, acompanha farofa com mandioca ou fritas. (2 pessoas)"
                price="R$60,90"
                img="semImagem.jpg"
                path="cardapioTDF" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="13 - Grelhados"
                desc="De Carne (Contra Filé), Peito de Frango, Coração de Frango, Calabresa, Cebola, Pimentão e Farofa. (2 pessoas)"
                price="R$54,90"
                img="semImagem.jpg"
                path="cardapioTDF" 
              /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <ExpansionPanelSummary aria-controls="panel5d-content" id="panel5d-header">
          <div className="font-topic">Pastéis</div>
        </ExpansionPanelSummary>    
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="29 - Carne"
                desc=""
                price="R$10,00"
                img="Pastel.jpg"
                path="cardapioFS" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="30 - Pizza"
                desc=""
                price="R$10,00"
                img="Pastel.jpg"
                path="cardapioFS" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="30 - Frango com Catupiry"
                desc=""
                price="R$10,00"
                img="Pastel.jpg"
                path="cardapioFS" 
              /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <ExpansionPanelSummary aria-controls="panel6d-content" id="panel6d-header">
          <div className="font-topic">Porções</div>
        </ExpansionPanelSummary>    
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="01 - Batata Frita"
                desc=""
                price="R$20,00"
                img="batata.jpg"
                path="cardapioFS" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="14 - Calabresa"
                desc=""
                price="R$20,00"
                img="semImagem.jpg"
                path="cardapioTDF" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="28 - Mista"
                desc="Calabresa e Batata Frita"
                price="R$25,00"
                img="semImagem.jpg"
                path="cardapioTDF" 
              /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <ExpansionPanelSummary aria-controls="panel7d-content" id="panel7d-header">
          <div className="font-topic">Bebidas</div>
        </ExpansionPanelSummary>    
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="15 - Refrigerantes (310ml)"
                desc="Coca-Cola, Fanta, Sprit e Kuat"
                price="R$4,00"
                img="Refrigerantes.png"
                path="generic" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="15 - Refrigerantes (500ml)"
                desc="Coca-Cola e Fanta"
                price="R$5,00"
                img="Refrigerantes.png"
                path="generic" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="21 - Água c/ e s/ gás"
                desc=""
                price="R$4,00"
                img="agua.png"
                path="generic" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="23 - Tônica"
                desc=""
                price="R$5,00"
                img="Tonica.jpg"
                path="cardapioTG" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="24 - Aquárius Fresh"
                desc=""
                price="R$5,00"
                img="AquariusFresh.png"
                path="generic" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="24 - Schweppes"
                desc=""
                price="R$5,00"
                img="Scheweppes.jpg"
                path="generic" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="15 - Refrigerantes (1,5L)"
                desc="Coca-Cola e Fanta"
                price="R$8,00"
                img="Refrigerantes.png"
                path="generic" 
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