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
import Bar from './../../assets/cardapioBC/bar.png'

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
          <img src={Bar}  className="img-header" alt="Churrasco na Brasa icon"/>
          O Convés Bar
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
          <div className="font-topic">Chopp Louvada</div>
        </ExpansionPanelSummary>
        
        <ExpansionPanelDetails className="details">
          <Typography>
            <Paper className={classes.root}>            
              <Modal 
                title="Pilsen"
                desc=""
                price="300ml R$7,00 / 500ml R$10,00"
                img="semImagem.jpg"
                path="cardapioCnB"              
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="HopLager"
                desc=""
                price="300ml R$8,00 / 500ml R$12,00"
                img="semImagem.jpg"
                path="cardapioCnB"              
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Vienna"
                desc=""
                price="300ml R$8,00 / 500ml R$12,00"
                img="semImagem.jpg"
                path="cardapioCnB"              
              /> 
            </Paper>
						<Paper className={classes.root}>            
              <Modal 
                title="Weiss"
                desc=""
                price="300ml R$8,00 / 500ml R$12,00"
                img="semImagem.jpg"
                path="cardapioCnB"              
              /> 
            </Paper>
						<Paper className={classes.root}>            
              <Modal 
                title="WitBier"
                desc=""
                price="300ml R$8,00 / 500ml R$12,00"
                img="semImagem.jpg"
                path="cardapioCnB"              
              /> 
            </Paper>
						<Paper className={classes.root}>            
              <Modal 
                title="GermanPilsner"
                desc=""
                price="300ml R$8,00 / 500ml R$12,00"
                img="semImagem.jpg"
                path="cardapioCnB"              
              /> 
            </Paper>
						<Paper className={classes.root}>            
              <Modal 
                title="Apa"
                desc=""
                price="300ml R$9,00 / 500ml R$13,00"
                img="semImagem.jpg"
                path="cardapioCnB"              
              /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <div className="font-topic">Cervejas</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
          <Paper className={classes.root}>            
              <Modal 
                title="Corona Long"
                desc=""
                price="R$10,00"
                img="Corona.png"
                path="cardapioBC"              
              /> 
            </Paper>
						<Paper className={classes.root}>            
              <Modal 
                title="Heineken Long"
                desc=""
                price="R$8,00"
                img="Heineken.PNG"
                path="cardapioBC"              
              /> 
            </Paper>
						<Paper className={classes.root}>            
              <Modal 
                title="Cacildis Long"
                desc=""
                price="R$8,00"
                img="Cacilds.png"
                path="cardapioBC"              
              /> 
            </Paper>
						<Paper className={classes.root}>            
              <Modal 
                title="Budweiser Long"
                desc=""
                price="R$7,00"
                img="budweiser.jpg"
                path="cardapioBC"              
              /> 
            </Paper>
						<Paper className={classes.root}>            
              <Modal 
                title="Skol Long"
                desc=""
                price="R$6,00"
                img="semImagem.jpg"
                path="cardapioCnB"              
              /> 
            </Paper>
						<Paper className={classes.root}>            
              <Modal 
                title="Bhrama Zero Long"
                desc=""
                price="R$6,00"
                img="semImagem.jpg"
                path="cardapioCnB"              
              /> 
            </Paper>
						<Paper className={classes.root}>            
              <Modal 
                title="Itaipava Go Draft Long"
                desc=""
                price="R$6,00"
                img="Itaipava.png"
                path="cardapioBC"              
              /> 
            </Paper>
						<Paper className={classes.root}>            
              <Modal 
                title="Itaipava Premium Long"
                desc=""
                price="R$6,00"
                img="ItaipavaP.png"
                path="cardapioBC"              
              /> 
            </Paper>
						<Paper className={classes.root}>            
              <Modal 
                title="Petra"
                desc=""
                price="R$6,00"
                img="Petra.jpg"
                path="cardapioBC"              
              /> 
            </Paper>
						<Paper className={classes.root}>            
              <Modal 
                title="Itaipava Malzbier"
                desc=""
                price="R$6,00"
                img="ItaipavaM.png"
                path="cardapioBC"              
              /> 
            </Paper>
						<Paper className={classes.root}>            
              <Modal 
                title="Skol Lata"
                desc=""
                price="R$4,00"
                img="SkolLata.png"
                path="cardapioBC"              
              /> 
            </Paper>
						<Paper className={classes.root}>            
              <Modal 
                title="Amstel Lata"
                desc=""
                price="R$4,00"
                img="Amstel.png"
                path="cardapioBC"              
              /> 
            </Paper>
            </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
      <ExpansionPanel className="paper-root" square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <div className="font-topic">Destilado</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
						<Paper className={classes.root}>            
              <Modal 
                title="Old Par"
                desc=""
                price="Dose R$20,00 / Litro R$220,00"
                img="OldPar.png"
                path="cardapioBC"              
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="Jack Daniel's"
                desc=""
                price="Dose R$20,00 / Litro R$220,00"
                img="JackDaniels.png"
                path="cardapioBC"              
              /> 
            </Paper>
						<Paper className={classes.root}>            
              <Modal 
                title="Absolut"
                desc=""
                price="Dose R$15,00 / Litro R$180,00"
                img="Absolut.png"
                path="cardapioBC"              
              /> 
            </Paper>
						<Paper className={classes.root}>            
              <Modal 
                title="Gin"
                desc=""
                price="Dose R$15,00 / Litro R$180,00"
                img="Gin.png"
                path="cardapioBC"              
              /> 
            </Paper>
						<Paper className={classes.root}>            
              <Modal 
                title="Smirnoff"
                desc=""
                price="Dose R$10,00 / Litro R$80,00"
                img="Smirnoff.png"
                path="cardapioBC"              
              /> 
            </Paper>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
			<ExpansionPanel className="paper-root" square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary aria-controls="panel4d-content" id="panel4d-header">
          <div className="font-topic">Diversos</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="details">
          <Typography>
						<Paper className={classes.root}>            
              <Modal 
                title="RedBull Energético"
                desc=""
                price="R$12,00"
                img="RedBull.png"
                path="cardapioBC"              
              /> 
            </Paper>
            <Paper className={classes.root}>            
              <Modal 
                title="TNT Energético"
                desc=""
                price="R$10,00"
                img="Tnt.png"
                path="cardapioBC"              
              /> 
            </Paper>
						<Paper className={classes.root}>            
              <Modal 
                title="Água de Côco 1L"
                desc=""
                price="R$10,00"
                img="AguaCoco.jpg"
                path="cardapioBC"              
              /> 
            </Paper>
						<Paper className={classes.root}>            
              <Modal 
                title="Schweppes Tônica e Citrus"
                desc=""
                price="R$5,00"
                img="Scheweppes.jpg"
                path="cardapioBC"              
              /> 
            </Paper>
						<Paper className={classes.root}>            
              <Modal 
                title="Aquarius Fresh"
                desc=""
                price="R$5,00"
                img="AquariusFresh.png"
                path="cardapioBC"              
              /> 
            </Paper>
						<Paper className={classes.root}>            
              <Modal 
                title="Refrigerante Lata"
                desc=""
                price="R$4,00"
                img="Refrigerantes.png"
                path="cardapioBC"              
              /> 
            </Paper>
						<Paper className={classes.root}>            
              <Modal 
                title="Água com Gás / sem Gás"
                desc=""
                price="R$4,00"
                img="agua.png"
                path="cardapioBC"              
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