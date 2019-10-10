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
import FinoSaborLogo from './../../assets/cardapioFS/finoSaborLogo.png'

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
          <img src={FinoSaborLogo}  className="img-header" alt=" The Dog Father icon"/>
          Fino Sabor
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
          <div className="font-topic">Frango a Passarinho</div>
        </ExpansionPanelSummary>
        
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="Porção Média 500g"
                desc="Acompanhamento: polenta ou batata frita - molho barbecue e molho de alho"
                price="R$30,00"
                img="semImagem.jpg"
                path="cardapioFS" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Porção Média 1kg"
                desc="Acompanhamento: polenta ou batata frita - molho barbecue e molho de alho"
                price="R$45,00"
                img="semImagem.jpg"
                path="cardapioFS" 
              /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <div className="font-topic">Tapiocas Salgadas</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="Presunto e Queijo"
                desc=""
                price="R$15,00"
                img="semImagem.jpg"
                path="cardapioFS" 
              />  
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Frango Cremoso com Queijo"
                desc=""
                price="R$15,00"
                img="semImagem.jpg"
                path="cardapioFS" 
              />  
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Carne Seca Cremosa com Queijo"
                desc=""
                price="R$16,00"
                img="semImagem.jpg"
                path="cardapioFS" 
              />  
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Calabresa com Tomate e Queijo"
                desc=""
                price="R$16,00"
                img="semImagem.jpg"
                path="cardapioFS" 
              />  
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Vegana: Palmito com molho de Tomate"
                desc=""
                price="R$16,00"
                img="semImagem.jpg"
                path="cardapioFS" 
              />   
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Fit: Peito de Peru com Queijo Branco"
                desc=""
                price="R$16,00"
                img="semImagem.jpg"
                path="cardapioFS" 
              />  
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Rúcula com Tomate Seco e Queijo Branco"
                desc=""
                price="R$16,00"
                img="semImagem.jpg"
                path="cardapioFS" 
              />  
            </Paper>           
            </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <div className="font-topic">Tapiocas Doces</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="Romeu e Julieta"
                desc=""
                price="R$15,00"
                img="semImagem.jpg"
                path="cardapioFS" 
              />  
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Coco com Leite Condensado"
                desc=""
                price="R$15,00"
                img="semImagem.jpg"
                path="cardapioFS" 
              />  
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Coco com Doce de Leite"
                desc=""
                price="R$16,00"
                img="semImagem.jpg"
                path="cardapioFS" 
              />  
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Nutella com Morango"
                desc=""
                price="R$16,00"
                img="semImagem.jpg"
                path="cardapioFS" 
              />  
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Nutella com Banana"
                desc=""
                price="R$16,00"
                img="semImagem.jpg"
                path="cardapioFS" 
              />  
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Fit: Pasta de Amendoim com Banana"
                desc=""
                price="R$16,00"
                img="semImagem.jpg"
                path="cardapioFS" 
              />  
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary aria-controls="panel4d-content" id="panel4d-header">
        <div className="font-topic">Caldo</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="Escaldado de Frango, com ou sem Ovos"
                desc=""
                price="R$16,00"
                img="semImagem.jpg"
                path="cardapioFS" 
              />  
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Caldo Verde - Batata, Calabresa e Couve"
                desc=""
                price="R$16,00"
                img="semImagem.jpg"
                path="cardapioFS" 
              />  
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Caldo de Feijão"
                desc=""
                price="R$16,00"
                img="semImagem.jpg"
                path="cardapioFS" 
              />  
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Caldo de Cabotiá e Carne Seca"
                desc=""
                price="R$16,00"
                img="semImagem.jpg"
                path="cardapioFS" 
              />  
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Dobradinha"
                desc=""
                price="R$25,00"
                img="semImagem.jpg"
                path="cardapioFS" 
              />  
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <ExpansionPanelSummary aria-controls="panel5d-content" id="panel5d-header">
        <div className="font-topic">Crepe no Palito</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="Presunto e Queijo"
                desc=""
                price="R$8,00"
                img="semImagem.jpg"
                path="cardapioFS" 
              />  
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Chocolate"
                desc=""
                price="R$8,00"
                img="semImagem.jpg"
                path="cardapioFS" 
              />  
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <ExpansionPanelSummary aria-controls="panel6d-content" id="panel6d-header">
        <div className="font-topic">Bebidas</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="Refrigerantes"
                desc=""
                price=""
                img="Refrigerantes.png"
                path="cardapioFS" 
              />  
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Água"
                desc=""
                price=""
                img="agua.png"
                path="cardapioFS" 
              />  
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Taça de Vinho Branco Colonial 200ml"
                desc=""
                price=""
                img="semImagem.jpg"
                path="cardapioFS" 
              />  
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Vinho Tinto"
                desc=""
                price=""
                img="semImagem.jpg"
                path="cardapioFS" 
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