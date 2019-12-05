import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom';
// import Whats_qld from '../../assets/whats_.png';
import { TiArrowBackOutline } from 'react-icons/ti';
import Modal from '../Modal/Modal'
// import AvaliacaoModal from '../Modal/AvaliacaoModal'

import './TheDogFather.css'
import LeBrutoicon from './../../assets/cardapioLeBruto/lebruto.png'

// import Grid from '@material-ui/core/Grid';

import EnviarMensagem from '../enviarMensagemWPP/EnviarMensagem'
  
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
          <img src={LeBrutoicon}  className="img-header" alt=" The Dog Father icon"/>
          Le Bruto
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
          <div className="font-topic">Hambúrgueres Artesanais</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
            <Modal 
              title="Prefácio"
              desc="Hambúrguer de blend especial de 130g de carne bovina (preparado na brasa, como churrasco) pão branco crocante Le Bruto, maionese rosê clássico da casa, queijo mozarela, tomate e alface americana."
              price="A partir de R$17,00"
              img="Prefácio.jpg"
              path="cardapioLeBruto"         
              /> 
            </Paper>  
            <Paper className={classes.root}>            
            <Modal 
              title="Gringo"
              desc="Ingredientes de excelente qualidade, em generosas medidas, por um ótimo preço/ Hambúrguer com 200g de um delicioso blend de carne bovina (preparado na brasa, como churrasco), pão branco da casa (maior tamanho), bacon, alface, tomate, queijo cheddar e um creme lemon da Le Bruto."
              price="A partir de R$24,00"
              img="Gringo.jpeg"
              path="cardapioLeBruto" 
              /> 
            </Paper>               
            <Paper className={classes.root}>            
            <Modal 
              title="Le Bruto"
              desc="O bruto sofisticado!/ Hambúrguer de blend especial de carne bovina, preparado na brasa, como churrasco, pão branco da casa, molho Le Bruto, bacon, presunto, mescla de alfaces, tomate cereja, picles, molho de tomate estilo ketchup e o delicioso queijo emental."
              price="A partir de R$26,00"
              img="LeBruto.jpeg"
              path="cardapioLeBruto" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
            <Modal 
              title="Sofisticado"
              desc="Nem salgado, nem doce: agridoce/ Hambúrguer de blend especial de carne bovina (preparado na brasa, como churrasco), pão rústico rosado Le Bruto, cebola caramelizada, molho barbecue LB, presunto especial espanhol e um apetitoso queijo emental."
              price="A partir de R$26,00"
              img="Sofisticado.jpeg"
              path="cardapioLeBruto" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
            <Modal 
              title="Brutamontes"
              desc="Tudo de bom, em generosas medidas/ Hambúrguer com 200g de um delicioso blend especial de carne bovina (preparado na brasa, como churrasco), recheado com queijo cheddar, pão branco da casa, molho lemon LB, bacon, mescla de alfaces, tomate cereja, cebola roxa, molho de tomate estilo ketchup e queijo mozarela."
              price="A partir de R$28,00"
              img="Brutamontes2.jpeg"
              path="cardapioLeBruto" 
              /> 
            </Paper>
            <Paper className={classes.root}>            
            <Modal 
              title="Churrascada"
              desc="Hambúrguer 180g de Costela, mozzarella de búfala, cebola tostada, maionese Le Bruto, alface e pão australiano."
              price="A partir de R$28,00"
              img="Churrascada.jpeg"
              path="cardapioLeBruto" 
              /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <div className="font-topic">Combos!</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
          <Paper className={classes.root}>            
              <Modal 
                title="Batata Frita + Refrigerante Lata"
                desc=""
                price="R$7,00"
                img="Churrascada.jpeg"
                path="cardapioLeBruto" 
                /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Batata Frita"
                desc=""
                price="R$5,00" 
                img="Batata.jpeg"
                path="cardapioLeBruto" 
                /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Refrigerantes "
                desc="Coca-cola, Coca-cola Sem Açucar, Fanta Uva, Schweppes Citrus, Guaraná Antarctica."
                price="R$4,00" 
                img="Refrigerantes.png"
                path="generic" 
                /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Água com gás"
                desc="Garrafa de 350 ml"
                price="R$4,00" 
                img="agua.png"
                path="generic" 
                /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Água sem gás"
                desc="Garrafa de 350 ml"
                price="R$3,00" 
                img="agua.png"
                path="generic" 
                /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </div>
      
      <EnviarMensagem numero="5565996214624" />
    
    </div>
  );
}