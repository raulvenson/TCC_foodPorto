import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom';
// import { FaWhatsapp } from 'react-icons/fa';
import Whats_qld from '../../assets/whats_qld.png';
// import Row from 'react-bootstrap';

import { TiArrowBackOutline } from 'react-icons/ti';

import Modal from '../Modal/Modal'
import AvaliacaoModal from '../Modal/AvaliacaoModal'

// import Batata from '../../assets/cardapioTDF/batata.jpg'


import './TheDogFather.css'
import TDFicon from './../../assets/TDFicon.jpg'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1.5 , 1),
    marginBottom: 6,
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
        <div className="font cabecalho">
          <img src={TDFicon}  className="img" alt=" The Dog Father icon"/>
          The DogFather
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
      <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <div className="font-topic">Entradas</div>
        </ExpansionPanelSummary>
        
        <ExpansionPanelDetails>
          <Typography>
            <Paper className={classes.root}>            
            <Modal 
              title="Fritas TDF com Bacon e Cheddar"
              desc="Porção de 400g de batatas fritas sequinhas com bacon e muito cheddar."
              price="A partir de R$18,90"
              img="fritas.png" 
              h2="Fritas TDF com Bacon e Cheddar"
              /> 
            </Paper>
            <Paper className={classes.root}>            
            <Modal 
              title="Mix TDF"
              desc="200g de onion rings, 200g de mussarela sticks e 300g de mini salsichas artesanais berna, acompanhadas de cheddar, barbecue e mostarda amarela."
              price="A partir de R$38,90"
              img="mix.png" 
              h2=""
              /> 
            </Paper>
            <Paper className={classes.root}>            
            <Modal 
              title="Porção de Salsicha Artesanal"
              desc="Salsicha suína e bovina artesanal berna, acompanhada de pão alemão, barbecue e mostarda amarela."
              price="A partir de R$19,90"
              img="semImagem.jpg" 
              h2=""
              /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <div className="font-topic">Hot Dogs Premium</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="01 - Fredo"
                desc="Salsicha TDF, milho e ervilha. Acompanha pão, purê de batata, salsicha, molho especial, batata palha e queijo maçaricado."
                price="A partir de R$14,90"
                img="semImagem.jpg" 
                h2=""/> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="02 - Vito"
                desc="Salsicha TDF, chilli e Doritos. Acompanha pão, purê de batata, salsicha, molho especial, batata palha e queijo maçaricado."
                price="A partir de R$18,90"
                img="semImagem.jpg" 
                h2=""/> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="03 - Connie"
                desc="Salsicha de frango, bacon e milho. Acompanha pão, purê de batata, salsicha, molho especial, batata palha e queijo maçaricado."
                price="A partir de R$18,90"
                img="semImagem.jpg" 
                h2=""/> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="04 - Tom"
                desc="Salsicha TDF, cheddar e cebola caramelizada. Acompanha pão, purê de batata, salsicha, molho especial, batata palha e queijo maçaricado."
                price="A partir de R$18,90"
                img="semImagem.jpg" 
                h2=""/> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="05 - Luca "
                desc=" Salsicha TDF, pepperoni, sour cream e vinagrete. Acompanha pão, purê de batata, salsicha, molho especial, batata palha e queijo maçaricado."
                price="A partir de R$18,90"
                img="semImagem.jpg" 
                h2=""/> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="06 - Carmella"
                desc="Salsicha TDF, tomate, manjericão, azeite e orégano. Acompanha pão, purê de batata, molho especial, batata palha e queijo maçaricado."
                price="A partir de R$18,90"
                img="semImagem.jpg" 
                h2=""/> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title=""
                desc=""
                price="A partir de R$18,90"
                img="semImagem.jpg" 
                h2=""/> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title=""
                desc=""
                price="A partir de R$18,90"
                img="semImagem.jpg" 
                h2=""/> 
            </Paper>
             
            </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <div className="font-topic">Combos!</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <ul>
              <li>Hot Dog Simples + Guaraná</li>
              <li>Hot Dog Bacon + Coca-Cola</li>
              <li>Hot Dog Calabresa + Água</li>
            </ul>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Combos!</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <ul>
              <li>Hot Dog Simples + Guaraná</li>
              <li>Hot Dog Bacon + Coca-Cola</li>
              <li>Hot Dog Calabresa + Água</li>
            </ul>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </div>
      <div className="wpp footer">
      <a href="https://api.whatsapp.com/send?phone=5565999271048&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20pedido!" style={{ textDecoration: 'none' }}>
        <img className="wpp" src={Whats_qld} alt="link para chat WhatsApp"/>
      </a> 
      </div>
    
    </div>
  );
}