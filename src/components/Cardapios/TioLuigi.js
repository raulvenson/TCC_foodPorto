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
import TioLuigiLogo from './../../assets/cardapioTL/TioLuigiLogo.png'

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
          <img src={TioLuigiLogo}  className="img-header" alt="General Mex logo"/>
          Tio Luigi
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
          <div className="font-topic">Tamanhos</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="Pequena (P)"
                desc="X Pedaços e X Sabores"
                price="A partir de R$25,00"
                img="semImagem.jpg"
                path="cardapioGM" 
               /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Média (M)"
                desc="X Pedaços e X Sabores"
                price="A partir de R$38,00"
                img="semImagem.jpg"
                path="cardapioGM" 
               /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Grande (G)"
                desc="X Pedaços e X Sabores"
                price="A partir de R$45,00"
                img="semImagem.jpg"
                path="cardapioGM" 
               /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Extra Grande (GG)"
                desc="X Pedaços e X Sabores"
                price="A partir de R$60,00"
                img="semImagem.jpg"
                path="cardapioGM" 
               /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <div className="font-topic">Pizzas</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="Portuguesa"
                desc="Molho de Tomate, Muçarela, Presunto, Ovo, Tomate, Cebola, Palmito, Azeitona e Orégano."
                price=""
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Strogonoff de Carne"
                desc="Molho de Tomate, Muçarela, Strogonoff, Azeitona, Orégano e Batata Palha."
                price=""
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Picanha"
                desc="Molho de Tomate, Muçarela, Picanha, Cebola, Azeitona e Orégano."
                price=""
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Nordestina"
                desc="Molho de Tomate, Muçarela, Carne de Sol, Azeitona, Orégano e Abacaxi."
                price=""
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Calabresa"
                desc="Molho de Tomate, Muçarela, Calabresa, Cebola, Azeitona e Orégano."
                price=""
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Frango com Catupiry"
                desc="Molho de Tomate, Muçarela, Frango Desfiado, Catupiri, Azeitona e Orégano."
                price=""
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Parmegiana de Carne"
                desc="Molho de Tomate, Muçarela, Filé de Carne, Tomate, Creme de Leite, Azeitona e Orégano."
                price=""
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Marguerita"
                desc="Molho de Tomate, Muçarela, Tomate, Manjericão e Azeitona."
                price=""
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Rúcula com Tomate Seco"
                desc="Molho de Tomate, Muçarela, Rúcula, Tomate Seco e Azeitona."
                price=""
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="A Moda da Casa"
                desc="Molho de Tomate, Muçarela, Frango, Bacon, Champignon, Calabresa, Presunto, Milho, Tomate, Creme de Leite, Azeitona e Orégano."
                price=""
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Moda do Chefe"
                desc="Molho de Tomate, Muçarela, Milho, Bacon, Calabresa, Cebola, Azeitona e Orégano."
                price=""
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Atum"
                desc="Molho de Tomate, Muçarela, Atum, Cebola, Azeitona e Orégano."
                price=""
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Atum com Rúcula e Tomate Seco"
                desc="Molho de Tomate, Muçarela, Atum, Rúcula, Tomate Seco, Cebola, Azeitona e Orégano."
                price=""
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Tio Luigi"
                desc="Molho de Tomate, Muçarela, Presunto, Ovos, Milho, Tomate, Palmito e Orégano."
                price=""
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="4 Queijos"
                desc="Molho de Tomate, Muçarela, Catupiry, Provolone, Gorgonzola, Azeitona e Orégano."
                price=""
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="3 Queijos"
                desc="Molho de Tomate, Muçarela, Parmesão, Gorgonzola, Azeitona e Orégano."
                price=""
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Mexicana"
                desc="Molho de Tomate, Muçarela, Frango, Tomate, Calabresa, Pimenta Calabresa e Orégano."
                price=""
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <div className="font-topic">Pizzas Doces</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="Banana com Canela"
                desc=""
                price=""
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Prestígio"
                desc=""
                price=""
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Chocolate"
                desc=""
                price=""
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary aria-controls="panel4d-content" id="panel4d-header">
          <div className="font-topic">Bordas Recheadas</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="Catupiry"
                desc=""
                price="" 
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Cheddar"
                desc=""
                price="" 
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Chocolate"
                desc=""
                price="" 
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Philadelphia"
                desc=""
                price="" 
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <ExpansionPanelSummary aria-controls="panel5d-content" id="panel5d-header">
        <div className="font-topic">Bebidas</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="Água s/ Gás"
                desc=""
                price="" 
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Água c/ Gás"
                desc=""
                price="" 
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Coca Cola Lata"
                desc=""
                price="" 
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>  
            <Paper className={classes.root}>            
              <Modal 
                title="Fanta Lata"
                desc=""
                price="" 
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Coca Cola Litro"
                desc=""
                price="" 
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper> 
            <Paper className={classes.root}>            
              <Modal 
                title="Fanta Litro"
                desc=""
                price="" 
                img="semImagem.jpg"
                path="cardapioGM" 
              /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <ExpansionPanelSummary aria-controls="panel5d-content" id="panel5d-header">
        <div className="font-topic">Sobremesa</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
          <Paper className={classes.root}>            
              <Modal 
                title="Häagen-Dazs"
                desc="(100ml) - Cookies, Morango, Macadâmia, Doce de Leite, Chocolate Belga."
                price="R$13,90" 
                img="semImagem.jpg"
                path="cardapioGM" 
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